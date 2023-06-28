import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export default function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  async function getMovies () {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      console.log(search, previousSearch)
      console.log(previousSearch, search)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      await setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, loading, getMovies }
}
