import React from "react";
import { Container, Row, Col, Figure } from 'react-bootstrap';

export function LocationChars({ chars }) {

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Row>
        <Col>
          {chars.map(character => (
          <Col key={character.id}>
            <Figure className='figure'>
              <Figure.Image
                src={character.image}
                className='image'
                alt={`Character with id: ${character.id}`}
              />            
                <Figure.Caption>
                  {character.name}
                </Figure.Caption>            
            </Figure>
          </Col>
        ))}
        </Col>
      </Row>
    </Container>
  )
}