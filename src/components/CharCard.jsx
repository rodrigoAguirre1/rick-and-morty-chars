import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/CharCard.css';
import { CharEpisodes } from './CharEpisodes';


export function CharCard({ character }) {

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={5} xl={5} className='carde'>
          <Card border='success'>
            <Card.Img variant='top' src={character.image} className='char-img'/>
            <Card.Body>
              <Card.Title className='card-title'>{character.name}</Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>Status: {character.status}.</ListGroup.Item>
              <ListGroup.Item>Species: {character.species}.</ListGroup.Item>
              <ListGroup.Item>Gender: {character.gender}.</ListGroup.Item>
              <ListGroup.Item>Location:  
                <NavLink to={`/location/${character.location.name}`} style={{ textDecoration: 'none' }}> {character.location.name}</NavLink>.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} className='episod'>
          <CharEpisodes char={character} />  
        </Col>
        <Col sm={12} md={12} lg={1} xl={1} />
      </Row>
    </Container>
  );
}