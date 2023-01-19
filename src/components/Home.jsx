import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationBar } from './NavigationBar';
import { Characters } from './Characters';
import { Pagination } from './Pagination';
import { CharacFilter } from './CharacFilter';
import Container from 'react-bootstrap/Container';
import '../styles/Home.css';
import { Loading } from './Loading';
import { HomeError } from './HomeError';

export function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [nameFilter, setNameFilter] = useState('')
  const [page, setPage] = useState(1)

  const allCharacters = async () => {
    setLoading(true)
    try {
      let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}`
      const request = await axios.get(url)
      setData(request.data)
      setLoading(false)
    }
    catch {
      setLoading(false)
    }
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

  const filtering = (name) => {
    setPage(1)
    setNameFilter(name)
  }

  return (
    <>
      <NavigationBar />
      <Container className='content'>
        {!loading ?
          (data.results.length > 0) ?
            (<>
              <Container style={{ position: 'sticky', top: '100px' }}>
                <CharacFilter filter={filtering} />
              </Container>
              <Container className='container-characters'>
                <h2 className='title-characters'>Characters</h2>
                {<Pagination
                  page={page}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  pages={data.info.pages}
                />}
                <Characters char={data.results} />
                {<Pagination
                  page={page}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  pages={data.info.pages}
                />}
              </Container>
            </>
            )
            :
            (
              <HomeError />
            )
          :
          (<Loading />)
        }
      </Container>
    </>
  )
}