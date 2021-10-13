import React from 'react';

const Movie = ({movie}: any) => {
  return (
    <div className="movie-poster" onClick={() => alert('준비중입니다.')}>
      <img src={movie.image} />
      <div className="movie-dday">D-{movie.dday}</div>
      <p className="movie-title">{movie.title}</p>
    </div>
  )
}

export default Movie;