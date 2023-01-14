import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationBar } from './NavigationBar';
import { Characters } from './Characters';
import { Pagination } from './Pagination';

export function Inicio() {
  const [personajes, setPersonajes] = useState(null)
  const [info, setInfo] = useState(null)

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const todosPersonajes = async (url) => {
    const peticion = await axios.get(url)
    setPersonajes(peticion.data.results)
    setInfo(peticion.data.info)
  }

  const onPrevious = () => {
    todosPersonajes(info.prev);
  }

  const onNext = () => {
    todosPersonajes(info.next);
  }

  useEffect(() => {
    todosPersonajes(initialUrl)
  }, [])

  return (
    <>
      <NavigationBar />

      {personajes != null ? (
        <>
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          <Characters char={personajes} />
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </>
      ) : ('No characters found')
      }

    </>
  )
}

