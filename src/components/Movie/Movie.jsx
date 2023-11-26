import './Movie.css'

export function Movie ({ id, poster, title, year }) {
  return (
    <li id={id} className='Movie'>
      <img src={poster} alt={title} />
      <div className='Movie-info'>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </li>
  )
}
