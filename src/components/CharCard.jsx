import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function CharCard({ personaje }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Status: {personaje.status}</ListGroup.Item>
        <ListGroup.Item>Species: {personaje.species}</ListGroup.Item>
        <ListGroup.Item>Gender: {personaje.gender}</ListGroup.Item>
        <ListGroup.Item>Location: {personaje.location.name}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
