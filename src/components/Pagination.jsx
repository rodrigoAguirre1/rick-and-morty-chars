import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import '../styles/Pagination.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Pagination({ prev, next, onPrevious, onNext }) {

  return (
    <Container>
      <Row>
        <Col />
        <Col xs='auto'>
          <ButtonGroup className='pagination'>
            {prev ? (
              <Button
                className='button'
                size='sm'
                variant='secondary'
                onClick={onPrevious}
              >Prev
              </Button>
            ) : null}

            {next ? (
              <Button
                size='sm'
                className='button'
                variant='secondary'
                onClick={onNext}
              >Next
              </Button>
            ) : null}
          </ButtonGroup>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}