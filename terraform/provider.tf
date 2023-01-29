terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.41.0"
    }
  }

  backend "s3" {
    bucket  = "cv-terraform-tfstate"
    key     = "terraform-rickandmorty.tfstate"
    region  = "us-east-1"
    profile = "personal"
  }
}

provider "aws" {
  region  = "us-east-1"
  # profile = "personal"

  default_tags {
    tags = {
      Project     = "rickandmorty-app"
      Environment = "dev"
      Region      = "us-east-1"
      State       = "Terraform managed"
    }
  }
}