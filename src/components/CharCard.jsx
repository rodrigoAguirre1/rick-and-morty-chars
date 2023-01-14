import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function CharCard({ character }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Status: {character.status}</ListGroup.Item>
        <ListGroup.Item>Species: {character.species}</ListGroup.Item>
        <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
        <ListGroup.Item>Location: {character.location.name}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}