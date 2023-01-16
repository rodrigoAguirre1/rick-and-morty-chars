import React from "react";
import { NavigationBar } from "./NavigationBar";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export function NotFound() {
  return (
    <>
      <NavigationBar />
      <h1 style={{ color: 'black', marginTop: '200px', textAlign: 'center' }}>Not Found</h1>
      <NavLink to='/' className='go-home'>
        <Button
          size='sm'
          variant='secondary'>
          Go Home
        </Button>
      </NavLink>
    </>
  )
}