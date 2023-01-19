import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../styles/CharCard.css'

export function EpisodeCard({ episode }) {
  return (
      <Card border='success'>
        <Card.Body>
          <Card.Title className='card-title'>Episode name: <br /> "{episode.name}"</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Episode: {episode.episode}.</ListGroup.Item>
          <ListGroup.Item>Air date: {episode.air_date}.</ListGroup.Item>
        </ListGroup>
      </Card>
  )
}