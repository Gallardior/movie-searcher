import { useCallback, useEffect, useMemo, useState } from 'react'
import { getMovies } from '../services/getMovies'
import debounce from 'just-debounce-it'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])

  const searchMovies = useCallback(debounce(async ({ query }) => {
    const newMovies = await getMovies({ query })
    setMovies(newMovies)
  }, 300), [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  useEffect(() => {
    searchMovies({ query })
  }, [query])

  return { movies: sortedMovies, searchMovies }
}
