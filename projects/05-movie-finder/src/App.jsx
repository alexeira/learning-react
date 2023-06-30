import { useState, useCallback } from 'react'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import debounce from 'just-debounce-it'

export default function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  function handleSubmit (event) {
    event.preventDefault()
    getMovies({ search })
  }

  function handleSort () {
    setSort(!sort)
  }

  function handleChange (event) {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div>
      <h1>Movie finder</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='search'
            type='search'
            placeholder='Avengers, Star Wars, Spider-Man...'
            style={{
              outline: 'none',
              border: '2px solid black',
              borderColor: error ? 'red' : 'black'
            }}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <small style={{ color: 'red' }}>{error}</small>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}
