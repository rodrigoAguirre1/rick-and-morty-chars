locals {
  mime_types = jsondecode(file("${path.module}/mime.json"))
}

################################################################################
# S3 Bucket
################################################################################

resource "aws_s3_bucket" "rickandmorty_bucket" {
  bucket = "rickandmorty-rodrigo-aguirre"

  tags = {
    Name = "Bucket for Rick and Morty Web files"
  }
}

resource "aws_s3_bucket_acl" "rickandmorty_bucket" {
  bucket = aws_s3_bucket.rickandmorty_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "rickandmorty_bucket" {
  bucket = aws_s3_bucket.rickandmorty_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

#Bucket policies.
resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.rickandmorty_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.rickandmorty_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.my_origin_access_identity.iam_arn]
    }
  }
}

#Export static web files to the bucket.
# resource "aws_s3_object" "rickandmorty_bucket" {
#   for_each = fileset("${path.module}/../react-web/build", "**")

#   bucket       = aws_s3_bucket.rickandmorty_bucket.id
#   key          = each.value
#   source       = "${path.module}/../react-web/build/${each.value}"
#   etag         = filemd5("${path.module}/../react-web/build/${each.value}")
#   content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
# }

################################################################################
# Cloudfront distribution
################################################################################

resource "aws_cloudfront_origin_access_identity" "my_origin_access_identity" {
  comment = "Identify the cloudfront and also allow connection between the cloudfront and the S3 bucket"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.rickandmorty_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.rickandmorty_bucket.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.my_origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "The Cloudfront distribution for Rick and Morty Web bucket"
  default_root_object = "index.html"
  aliases             = ["rickandmorty.rodrigoaguirre.com"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = aws_acm_certificate.cert.arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
    cloudfront_default_certificate = false
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.rickandmorty_bucket.bucket_regional_domain_name

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  custom_error_response {
    error_code = 403
    response_code = 200
    response_page_path = "/index.html"
  }

  tags = {
    Name = "The Cloudfront distribution for Rick and Morty Web bucket"
  }
}

################################################################################
# ACM Certificate
################################################################################

resource "aws_acm_certificate" "cert" {
  lifecycle {
    create_before_destroy = true
  }

  domain_name               = data.aws_route53_zone.main.name
  subject_alternative_names = ["*.${data.aws_route53_zone.main.name}"]
  validation_method         = "DNS"
}

################################################################################
# Route53
################################################################################

data "aws_route53_zone" "main" {
  name         = "rodrigoaguirre.com"
  private_zone = false
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.main.zone_id
}

resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

resource "aws_route53_record" "rickandmorty_domain" {
  name    = "rickandmorty.rodrigoaguirre.com"
  zone_id = data.aws_route53_zone.main.zone_id
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}