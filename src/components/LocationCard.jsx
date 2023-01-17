import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../styles/CharCard.css'

export function LocationCard({ location }) {
  return (
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title className='card-title'>Location: "{location.name}"</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Type: {location.type}.</ListGroup.Item>
          <ListGroup.Item>Dimension: {location.dimension}.</ListGroup.Item>
        </ListGroup>
      </Card>
  )
}