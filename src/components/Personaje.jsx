import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import Button from 'react-bootstrap/Button';
import { CharCard } from './CharCard';


const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)
  const params = useParams()

  const unicoPersonaje = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
  }

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  }, [])

  return (
    <>
      <NavigationBar />
      {personaje != null ? (
        <div>
          <CharCard personaje={personaje}/>
        </div>
      ) : ('no hay personaje')}
      <NavLink to='/'>
        <Button
          size="lg"
          variant="secondary"
          style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          Home
        </Button>
      </NavLink>
    </>

  )
}

export default Personaje;