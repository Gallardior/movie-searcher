import { useContext } from 'react'
import { ListMovies } from '../components/ListMovies/ListMovies'
import { useMovies } from '../hooks/useMovies'
import { SearcherContext } from '../context/SearcherContext'

export function Home () {
  const { query, sort } = useContext(SearcherContext)
  const { movies } = useMovies({ query, sort })

  return (
    <section>
      <ListMovies movies={movies} />
    </section>
  )
}
