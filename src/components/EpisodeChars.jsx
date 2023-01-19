import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Characters.css';
import { Loading } from './Loading';

export function EpisodeChars({ episode }) {
  const [char, setChar] = useState(null)
  const [loading, setLoading] = useState(true)

  const eachChar = async (oneEpisode) => {
    setLoading(true)
    try {
      let episodeChars = []
      await Promise.all(oneEpisode.map(axios.get))
        .then(array => {
          array.forEach(result => {
            episodeChars.push(result.data);
          });
        });
      setChar(episodeChars)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    eachChar(episode.characters)
  }, [episode.characters])

  return (
    <>
      {!loading ?
        (char != null) ?
          (<Container className='chars-conteiner'>
            <h2 className='name-title'>Characters that apears on {episode.name}</h2>
            <Row>
              {char.map(character => (
                <Col key={character.id} className='row-chars'>
                  <Figure className='figure'>
                    <Figure.Image
                      src={character.image}
                      className='image'
                      alt={`Character with id: ${character.id}`}
                    />
                    <NavLink to={`/character/${character.id}`} className='name'>
                      <Figure.Caption className='name'>
                        {character.name}
                      </Figure.Caption>
                    </NavLink>
                  </Figure>
                </Col>
              ))}
            </Row>
          </Container>)
          :
          ('No characters from this episode found')
        :
        (<Loading />)
      }
    </>
  )
}