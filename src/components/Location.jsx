import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavigationBar } from "./NavigationBar";
import { useParams, NavLink } from 'react-router-dom';
import { Container, Button } from "react-bootstrap";
import { Loading } from './Loading';
import { LocationCard } from "./LocationCard";
import { LocationChars } from "./LocationChars";

export function Location() {
  const [location, setLocation] = useState(null)
  const [chars, setChars] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  // const singleLocation = async (name) => {
  //   setLoading(true)
  //   let urlLocation = `https://rickandmortyapi.com/api/location/?name=${name}`
  //   let urlCharacters = 'https://rickandmortyapi.com/api/character'
  //   const request1 = await axios.get(urlLocation)
  //   const request2 = await axios.get(urlCharacters)
  //   axios.all([request1, request2]).then(
  //     axios.spread((...allData) => {
  //       const locationData = allData[0]
  //       const characterData = allData[1]
  //       setLocation(locationData.data.results[0])
  //       setCharacters(characterData.data.results)
  //       setLoading(false)
  //     })
  //   )
  // }

  const singleLocation = async (name) => {
    setLoading(true)
    let urlLocation = `https://rickandmortyapi.com/api/location/?name=${name}`
    const request1 = await axios.get(urlLocation)
    setLocation(request1.data.results[0])
    let url = request1.data.results[0].residents
    let locChar = []
    await Promise.all(url.map(axios.get))
    .then(array => {
      array.forEach(result => {
        locChar.push(result.data);
      });
    });
    setChars(locChar)
    setLoading(false)
  }

  useEffect(() => {
    singleLocation(params.name)
  }, [params.name])

  return (
    <>
      <NavigationBar />
      <Container>

        {!loading ?
          ((location != null) && (chars != null)) ?
            (<Container style={{ marginTop: '100px' }}>

              <LocationCard location={location} />
              <LocationChars chars={chars} />

              <NavLink to='/' className='go-home'>
                <Button
                  size='sm'
                  variant='secondary'>
                  Go Home
                </Button>
              </NavLink>
            </Container>)
            :
            ('No characters found')
          :
          (<Loading />)
        }

      </Container>
    </>
  )

}
