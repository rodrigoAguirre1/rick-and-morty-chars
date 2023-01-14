import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import Button from 'react-bootstrap/Button';
import { CharCard } from './CharCard';
import Container from 'react-bootstrap/esm/Container';
import '../styles/CharacPage.css';

export function CharacPage() {
  const [character, setCharacter] = useState(null)
  const params = useParams()

  const unicocharacter = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
  }

  useEffect(() => {
    unicocharacter(params.id, setCharacter)
  }, [params.id])

  return (
    <>
      <NavigationBar />
      <Container className='content2'>
        {character != null ? (
          <Container className='charact'>
            <CharCard character={character} />
          </Container>
        ) : ('Character not found')}
        <NavLink to='/' className='go-home'>
          <Button
            size='sm'
            variant='secondary'>
            Go Home
          </Button>
        </NavLink>
      </Container>
    </>

  )
}