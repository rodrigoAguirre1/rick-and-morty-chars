import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavigationBar } from './NavigationBar';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Loading } from './Loading';
import { Container, Button, Col, Row } from "react-bootstrap";
import { EpisodeCard } from "./EpisodeCard";
import { EpisodeChars } from "./EpisodeChars";
import { message } from 'antd';

export function Episode() {
  const [episode, setEpisode] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate();

  const singleEpisode = async (id) => {
    setLoading(true)
    try {
      const request = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${id}`)
      setEpisode(request.data.results[0])
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
      message.error('Unfortunately this episode does not exist, please provide an episode id that exists!')
      navigate('/')
    }
  }

  useEffect(() => {
    singleEpisode(params.id)
  }, [params.id])

  return (
    <>
    <NavigationBar />
    <Container className='content2'>
        {!loading ?
          (episode != null) &&
            (<Container>
              <Row>
                <Col sm={12} md={12} lg={3} xl={3}  >
                  <Container style={{ position: 'sticky', top: '100px' }}>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                      <EpisodeCard episode={episode} />
                    </Container>
                    <NavLink to='/' className='go-home'>
                      <Button
                        size='sm'
                        variant='secondary'>
                        Go Home
                      </Button>
                    </NavLink>
                  </Container>
                </Col>
                <Col sm={12} md={12} lg={9} xl={9} style={{ marginTop: '20px' }}>
                  <EpisodeChars episode={episode}  />
                </Col>
              </Row>
            </Container>)
          :
          (<Loading />)
        }
      </Container>
    </>
  )
}