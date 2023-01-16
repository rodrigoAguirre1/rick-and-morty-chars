import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/CharacFilter.css'

export function CharacFilter({ filter }) {

  return (
    <DropdownButton className='dropdown' size='sm' id='dropdown-basic-button' title='Filter by main characters' variant='secondary'>
      <Dropdown.Item onClick={() => filter(0)}>Ricks</Dropdown.Item>
      <Dropdown.Item onClick={() => filter(1)}>Mortys</Dropdown.Item>
      <Dropdown.Item onClick={() => filter(2)}>Summers</Dropdown.Item>
      <Dropdown.Item onClick={() => filter(3)}>Beths</Dropdown.Item>
      <Dropdown.Item onClick={() => filter(4)}>Jerrys</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => filter(5)}>Remove filter</Dropdown.Item>
    </DropdownButton>
  );
}