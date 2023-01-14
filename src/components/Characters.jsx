import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { NavLink } from 'react-router-dom';
import '../styles/Characters.css';

export function Characters({ char }) {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center'}}>
      <Row>        
        {char.map(character => (
          <Col key={character.id}>
            <Figure className='figure'>
              <Figure.Image
                src={character.image}
                className='image'
                alt={`Character with id: ${character.id}`}
              />
              <NavLink to={`/character/${character.id}`} className='name'>
                <Figure.Caption>
                  {character.name}
                </Figure.Caption>
              </NavLink>
            </Figure>
          </Col>
        ))}
      </Row>

    </Container>
  )
}