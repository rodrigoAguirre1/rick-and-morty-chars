import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { name } from '../conf/config';
import '../styles/CharacFilter.css';

export function CharacFilter({ filter }) {

  return (
    <DropdownButton className='dropdown' size='sm' id='dropdown-basic-button' title='Filter by main characters' variant='secondary'>
      {
        name.map(name => <Dropdown.Item onClick={() => filter(name.urlName)} key={name.name}>{name.label}</Dropdown.Item>)
      }
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => filter('')}>Remove filter</Dropdown.Item>
    </DropdownButton>
  );
}