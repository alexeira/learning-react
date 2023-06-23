import useEllipsisTooltip from '../hooks/useEllipsisTooltip'

export default function Movies ({ movies }) {
  const { ref: titleRef, tooltip, setTooltip } = useEllipsisTooltip()

  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <h3
            ref={titleRef}
            onMouseOut={() => setTooltip(false)}
            title={tooltip ? movie.title : undefined}
          >
            {movie.title}
          </h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
