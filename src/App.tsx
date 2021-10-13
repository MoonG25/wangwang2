import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/layout';
import Movies from './features/movies/Movies';

function App() {
  return (
    <Layout>
      <div className="area-result">
        <div className="m1">
          <span className="area-title">상영예정</span>
          <span className="area-title gray" onClick={() => alert('준비중입니다.')}>무비차트</span>
        </div>
        <Movies />
      </div>
    </Layout>
  );
}

export default App;
