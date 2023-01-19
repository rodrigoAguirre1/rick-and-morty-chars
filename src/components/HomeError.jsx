import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import '../styles/Location.css'

export function HomeError() {
  return (
    <Container className='container-error'>
      <h4>The network connection has failed.</h4>
      <h6>
        Please try again:
        <NavLink to='/' className='go-home'>
          <Button
            size='sm'
            variant='secondary'>
            Go Home
          </Button>
        </NavLink>
        when the network connection returns.
      </h6>
    </Container>
  )
}