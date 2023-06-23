import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'

export default function App () {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  function handleSubmit (event) {
    event.preventDefault()
  }

  function handleChange (event) {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
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
          <button type='submit'>Buscar</button>
        </form>
        {error && <small style={{ color: 'red' }}>{error}</small>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
