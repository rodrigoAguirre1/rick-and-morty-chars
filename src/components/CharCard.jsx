import React from 'react';
import { Card, Col, Container, ListGroup, Row, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/CharCard.css'

export function CharCard({ character }) {

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6} className='carde'>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant='top' src={character.image} />
            <Card.Body>
              <Card.Title className='card-title'>{character.name}</Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>Status: {character.status}</ListGroup.Item>
              <ListGroup.Item>Species: {character.species}</ListGroup.Item>
              <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
              <ListGroup.Item>Location:  
                <NavLink to='/Location' style={{ textDecoration: 'none' }}> {character.location.name}</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} className='episod'>
          <Dropdown className='episod2'>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Episodes where this<br /> caracter appears
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {character.episode.map(name => (
                <Dropdown.ItemText>Episode: {name.substr(40, 41)}</Dropdown.ItemText>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={12} md={12} lg={2} xl={2} />
      </Row>
    </Container>
  );
}