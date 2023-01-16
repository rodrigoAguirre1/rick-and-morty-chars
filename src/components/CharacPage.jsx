import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { Button, Container } from 'react-bootstrap';
import { CharCard } from './CharCard';
import '../styles/CharacPage.css';
import { Loading } from './Loading';

export function CharacPage() {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  const singleCharacter = async (id) => {
    setLoading(true)
    const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    setCharacter(request.data)
    setLoading(false)
  }

  useEffect(() => {
    singleCharacter(params.id)
  }, [params.id])

  return (
    <>
      <NavigationBar />
      <Container className='content2'>
        {!loading ?
          (character != null) ?
            (<>
              <Container className='charact'>
                <CharCard character={character} />
              </Container>
              <NavLink to='/' className='go-home'>
                <Button
                  size='sm'
                  variant='secondary'>
                  Go Home
                </Button>
              </NavLink>
            </>)
            :
            ('No characters found')
          :
          (<Loading />)
        }

      </Container>
    </>

  )
}