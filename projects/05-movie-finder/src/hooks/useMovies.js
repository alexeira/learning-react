import { searchMovies } from '../services/movies'
import { useState } from 'react'

export default function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  async function getMovies () {
    const newMovies = await searchMovies({ search })
    await setMovies(newMovies)
  }

  return { movies, getMovies }
}
