import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';
import img from '../images/navbar.png';

export function NavigationBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='navbar-title'>
            <img
              alt=""
              src={img}
              className="d-inline-block align-top navbar-img"
            />{' '}
            Rick and Morty characters
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}