import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Characters.css';

export function Characters({ char }) {
  return (
    <Container>
      <Row>
        {char.map(character => (
          <Col key={character.id}  className='row-chars'>
            <Figure className='figure'>
              <Figure.Image
                src={character.image}
                className='image'
                alt={`Character with id: ${character.id}`}
              />
              <NavLink to={`/character/${character.id}`} className='name'>
                <Figure.Caption className='names'>
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