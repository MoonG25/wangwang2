import React, { useEffect } from 'react';
import { findTicket, getMovieSchedules } from './api/movie.api';
import './App.css';
import Movies from './features/movies/Movies';

function App() {
  return (
    <div className="container">
      <div className="area-search">
        <div className="search-bg">
          <video src="/video/background.mp4" autoPlay loop muted />
          <div className="video-cover"></div>
        </div>
        <div className="search">
          <input type="text" placeholder="search movie ticket" onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (e.currentTarget.value) {
                findTicket(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }
          }} />
        </div>
      </div>
      <div className="area-result">
        <Movies />
      </div>
    </div>
  );
}

export default App;
