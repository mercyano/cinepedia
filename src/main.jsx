import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import MovieDetail from './pages/MovieDetail';

import './index.css';
import SearchResults from './pages/SearchResults.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
        <Route path="/movies/search/:query" element={<SearchResults />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
