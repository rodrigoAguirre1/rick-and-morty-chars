import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export function Pagination({ prev, next, onPrevious, onNext }) {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <ButtonGroup style={{margin: '10px', display: 'flex', justifyContent: 'center'}}>
      {prev ? (
        <Button
          variant="secondary"
          onClick={handlePrevious}
        >Previous
        </Button>
      ) : null}
      {next ? (
        <Button
          variant="secondary"
          onClick={handleNext}
        >Next
        </Button>
      ) : null}
    </ButtonGroup>
  )
}