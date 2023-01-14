import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { NavLink } from 'react-router-dom';


export function Characters({ char }) {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center'}}>
      <Row>        
        {char.map(personaje => (
          <Col key={personaje.id}>
            <Figure>
              <Figure.Image
                src={personaje.image}
                width={'50px'}
                alt={`Character with id: ${personaje.id}`}
              />
              <NavLink to={`/personaje/${personaje.id}`}>
                <Figure.Caption>
                  {personaje.name}
                </Figure.Caption>
              </NavLink>
            </Figure>
          </Col>
        ))}
      </Row>

    </Container>
  )
}