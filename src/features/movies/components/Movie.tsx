const Movie = ({movie}: any) => {
  return (
    <div className="poster" style={{
      backgroundImage: `url(${movie.poster})`
    }}>
      <span className="chip">{movie.start} ~ {movie.end}</span>
      <span className="chip">{movie.screen}</span>
    </div>
  )
}

export default Movie;