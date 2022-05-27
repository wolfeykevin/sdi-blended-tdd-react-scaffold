import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
// import ReactDOM from 'react-dom/client';
import { Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function App ()  {
  const [movieData, setMovieData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/movies`)
    .then(res => res.json())
    .then(data => 
      {
      setMovieData(data)
      console.log(data)  
      })
  }, [])

  return (
    <>
      <Header></Header>      
      <MovieList movieData={movieData}/>
    </>

  );
}
const Header = () => {
  return (
    <h1>GMDB</h1>
  )
}

export default App;
