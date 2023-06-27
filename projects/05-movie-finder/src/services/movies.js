const apiKey = import.meta.env.VITE_API_KEY

export async function searchMovies ({ search }) {
  if (!search) return

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
