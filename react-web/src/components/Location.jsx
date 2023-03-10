import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavigationBar } from "./NavigationBar";
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Container, Button, Col, Row } from "react-bootstrap";
import { Loading } from './Loading';
import { LocationCard } from "./LocationCard";
import { LocationChars } from "./LocationChars";
import '../styles/Location.css';
import { message } from 'antd';

export function Location() {
  const [location, setLocation] = useState(null)
  const [chars, setChars] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate();

  const singleLocation = async (name) => {
    setLoading(true)
    try {
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
    catch (error) {
      setLoading(false)
      message.error('There is nothing in this Location.')
      navigate('/')
    }
  }

  useEffect(() => {
    singleLocation(params.name)
  }, [params.name])

  return (
    <>
      <NavigationBar />
      <Container className='content'>
        {!loading ?
          ((location != null) && (chars != null)) &&
            (<Container>
              <Row>
                <Col sm={12} md={12} lg={3} xl={3}  >
                  <Container style={{ position: 'sticky', top: '100px' }}>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                      <LocationCard location={location} />
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
                  <LocationChars chars={chars} location={location} />
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
