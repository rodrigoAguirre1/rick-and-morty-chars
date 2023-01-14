import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationBar } from './NavigationBar';
import { Characters } from './Characters';
import { Pagination } from './Pagination';
import { CharacFilter } from './CharacFilter';
import Container from 'react-bootstrap/Container';
import '../styles/Home.css';

export function Home() {
  const [characters, setCharacters] = useState(null)
  const [info, setInfo] = useState(null)


  const allCharacters = async (url) => {
    const peticion = await axios.get(url)
    setCharacters(peticion.data.results)
    setInfo(peticion.data.info)
  }

  useEffect(() => {
    allCharacters('https://rickandmortyapi.com/api/character')
  }, [])

  const onPrevious = () => {
    allCharacters(info.prev);
  }

  const onNext = () => {
    allCharacters(info.next);
  }

  /*     Filter Buttons      */
  const ricks = () => {
    allCharacters('https://rickandmortyapi.com/api/character/?name=rick');
  }
  const mortys = () => {
    allCharacters('https://rickandmortyapi.com/api/character/?name=morty');
  }
  const summers = () => {
    allCharacters('https://rickandmortyapi.com/api/character/?name=summer');
  }
  const beths = () => {
    allCharacters('https://rickandmortyapi.com/api/character/?name=beth');
  }
  const jerrys = () => {
    allCharacters('https://rickandmortyapi.com/api/character/?name=jerry');
  }
  const remove = () => {
    allCharacters('https://rickandmortyapi.com/api/character/');
  }

  return (
    <>
      <NavigationBar />
      <Container className='content'>
        <CharacFilter
          ricks={ricks}
          mortys={mortys}
          summers={summers}
          beths={beths}
          jerrys={jerrys}
          remove={remove}
        />
        {characters != null ? (
          <>
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
            <Characters char={characters} />
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </>
        ) : ('No characters found')
        }
      </Container>
    </>
  )
}