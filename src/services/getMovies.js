import { API_URL } from '../constants.json'

export const getMovies = async ({ query }) => {
  if (query === '') return []

  try {
    const data = await fetch(API_URL + query)
    const json = await data.json()
    const resultMovies = json.Search || []

    return resultMovies?.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year
    }))
  } catch (error) {
    throw new Error(`Error al buscar peliculas de ${query}`)
  }
}
