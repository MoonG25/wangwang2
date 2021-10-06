import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/layout';
import Movies from './features/movies/Movies';

function App() {
  return (
    <Layout>
      <div className="area-result">
        <Movies />
      </div>
    </Layout>
  );
}

export default App;
