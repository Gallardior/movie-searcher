import { Movie } from '../Movie/Movie'
import './ListMovies.css'

export function ListMovies ({ movies }) {
  return (
    <ul className='ListMovies'>
      {
        movies?.length > 0
          ? movies.map(movie => <Movie key={movie.id} {...movie} />)
          : 'Sin resultados...'
      }
    </ul>
  )
}
