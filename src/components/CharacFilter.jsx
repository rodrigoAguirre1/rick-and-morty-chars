import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/CharacFilter.css'

export function CharacFilter({ ricks, mortys, summers, beths, jerrys, remove }) {

  return (
    <DropdownButton className='dropdown' size="sm" id="dropdown-basic-button" title="Filter by main characters" variant='secondary'>
      <Dropdown.Item onClick={ricks}>Ricks</Dropdown.Item>
      <Dropdown.Item onClick={mortys}>Mortys</Dropdown.Item>
      <Dropdown.Item onClick={summers}>Summers</Dropdown.Item>
      <Dropdown.Item onClick={beths}>Beths</Dropdown.Item>
      <Dropdown.Item onClick={jerrys}>Jerrys</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={remove}>Remove filter</Dropdown.Item>
    </DropdownButton>
  );
}
