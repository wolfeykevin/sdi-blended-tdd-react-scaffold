import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
// import ReactDOM from 'react-dom/client';
import { Router, Switch, Route, useNavigate, useParams } from 'react-router-dom';
import MovieList from './MovieList';

function MovieDetails ({isTesting, testingId})  {
    let params = useParams();
    console.log(params)
    console.log("you got to movie details: ");
    const [movieData, setMovieData] = useState({
      title: ''
    })

    if(isTesting){
      params.id=testingId;
    }

    useEffect(() => {
      fetch(`http://localhost:3001/movies/${params.id}`)
      .then(res => {
        console.log(res)
        // console.log(res.json())
        return res.json()
      })
        .then(data => 
          {
          setMovieData(data)
          console.log(data)  
          })
    }, [])

  return (
    <>
      <Header movieData={movieData}></Header>
      <ul>
        {Object.entries(movieData).map(([key, value]) => {
          return <li key = {key}>
              {`${key}: ${value}`}
          </li>
        })}
      </ul>      
    </>

  );
}
const Header = ({movieData}) => {
  return (
    <h1>{movieData.title}</h1>

  )
}

export default MovieDetails;
