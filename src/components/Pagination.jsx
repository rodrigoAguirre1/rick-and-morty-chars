import React from 'react';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import '../styles/Pagination.css';

export function Pagination({ page, nextPage, prevPage }) {

  if (page < 2) {
    return (
      <Container>
        <Row>
          <Col />
          <Col xs='auto'>
            <ButtonGroup className='pagination'>
              <Button
                size='sm'
                className='button'
                variant='secondary'
                onClick={nextPage}
              >Next
              </Button>
            </ButtonGroup>
          </Col>
          <Col />
        </Row>
      </Container>
    )
  } else if (page > 41) {
    return (
      <Container>
        <Row>
          <Col />
          <Col xs='auto'>
            <ButtonGroup className='pagination'>
              <Button
                className='button'
                size='sm'
                variant='secondary'
                onClick={prevPage}
              >Prev
              </Button>
            </ButtonGroup>
          </Col>
          <Col />
        </Row>
      </Container>
    )
  } else {
    return (
      <Container>
        <Row>
          <Col />
          <Col xs='auto'>
            <ButtonGroup className='pagination'>
              <Button
                className='button'
                size='sm'
                variant='secondary'
                onClick={prevPage}
              >Prev
              </Button>
              <Button
                size='sm'
                className='button'
                variant='secondary'
                onClick={nextPage}
              >Next
              </Button>
            </ButtonGroup>
          </Col>
          <Col />
        </Row>
      </Container>
    )
  }
}