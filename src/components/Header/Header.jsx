import { Searcher } from '../Searcher/Searcher'

export function Header () {
  return (
    <header>
      <h1 className='title'>Buscador de peliculas</h1>
      <Searcher />
    </header>
  )
}
