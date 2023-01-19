import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table } from 'antd';
import { Loading } from './Loading';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export function CharEpisodes({ char }) {
  const [episodes, setEpisodes] = useState(null)
  const [loading, setLoading] = useState(true)

  const { Column } = Table;

  const charEpisodes = async (chars) => {
    setLoading(true)
    try {
      let urlEpisodes = []
      let test = []
      await Promise.all(chars.map(axios.get))
        .then(array => {
          array.forEach(result => {
            test = Object.assign({}, { 'id': result.data.id, 'name': result.data.name})
            urlEpisodes.push(test)
          });
        });
      setEpisodes(urlEpisodes)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    charEpisodes(char.episode)
  }, [char.episode])

  return (
    <>
      {!loading ?
        (episodes != null) ?
          (<Container className='chars-conteiner'>
            <h2 className='name-title'>Episodes in which {char.name} appears</h2> 
            <Table dataSource={episodes} bordered>
              <Column
                title='Episode Number'
                dataIndex= 'id'
                key={episodes.id}
                align= 'center'
              />
              <Column
                title='Episode Name'
                dataIndex= 'name'
                key={episodes.name}
                render={(text) => <NavLink to={`/episode/${text}`}>{text}</NavLink>}
              />
            </Table>
          </Container>)
          :
          ('This character does not participate in any episode')
        :
        (<Loading />)
      }
    </>
  )
}