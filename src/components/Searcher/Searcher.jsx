import { useContext } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { SearcherContext } from '../../context/SearcherContext'

export function Searcher () {
  const { query, setQuery, sort, setSort } = useContext(SearcherContext)
  const { searchMovies } = useMovies({ query, sort })

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    searchMovies({ query })
  }

  return (
    <form className='Searcher' onSubmit={handleSubmit}>
      <input
        name='query'
        onChange={handleChange}
        placeholder='Matrix, Sherk, Avengers...'
        value={query}
      />
      <input type='checkbox' onChange={handleSort} checked={sort} title='Ordenar peliculas por titulo' />
      <button>Buscar</button>
    </form>
  )
}
