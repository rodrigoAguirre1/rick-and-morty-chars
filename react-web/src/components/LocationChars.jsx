import React from "react";
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Characters.css'

export function LocationChars({ chars, location }) {

  return (
    <Container className='chars-conteiner'>
      <h2 className='name-title'>Characters that are residents of {location.name}</h2> 
      <Row>
        {chars.map(character => (
          <Col key={character.id} className='row-chars'>
            <Figure className='figure'>
              <Figure.Image
                src={character.image}
                className='image'
                alt={`Character with id: ${character.id}`}
              />
              <NavLink to={`/character/${character.id}`} className='name'>
              <Figure.Caption className='name'>
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