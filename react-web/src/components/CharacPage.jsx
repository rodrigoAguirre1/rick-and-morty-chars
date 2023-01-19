import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { Button, Container } from 'react-bootstrap';
import { CharCard } from './CharCard';
import '../styles/CharacPage.css';
import { Loading } from './Loading';
import { message } from 'antd';

export function CharacPage() {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate();

  const singleCharacter = async (id) => {
    setLoading(true)
    try {
      const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      setCharacter(request.data)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
      message.error('Hey! you must provide an character id!')
      navigate('/')
    }
  }

  useEffect(() => {
    singleCharacter(params.id)
  }, [params.id])


  return (
    <>
      <NavigationBar />
      <Container className='content2'>
        {!loading ?
          (character != null) &&
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
          (<Loading />)
        }
      </Container>
    </>
  )
}