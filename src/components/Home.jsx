import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationBar } from './NavigationBar';
import { Characters } from './Characters';
import { Pagination } from './Pagination';
import { CharacFilter } from './CharacFilter';
import Container from 'react-bootstrap/Container';
import '../styles/Home.css';
import { name } from '../conf/config';
import { Loading } from './Loading';

export function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [nameFilter, setNameFilter] = useState('')
  const [page, setPage] = useState(1)

  const allCharacters = async () => {
    setLoading(true)
    let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}`
    const request = await axios.get(url)
    setData(request.data)
    setLoading(false)
  }

  useEffect(() => {
    allCharacters()
  }, [page, nameFilter])

  const prevPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const filtering = (num) => {
    setNameFilter(name[num])
  }

  return (
    <>
      <NavigationBar />
      <Container className='content'>
        <Container style={{ position: 'sticky', top: '100px' }}>
          <CharacFilter
            filter={filtering}
          />
        </Container>
        {!loading ?
          (data.results.length > 0) ?
            (<Container className='container-characters'>
              <h2 className='title-characters'>Characters</h2>
              {<Pagination
                page={page}
                nextPage={nextPage}
                prevPage={prevPage}
              />}
              <Characters char={data.results} />
              {<Pagination
                page={page}
                nextPage={nextPage}
                prevPage={prevPage}
              />}
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