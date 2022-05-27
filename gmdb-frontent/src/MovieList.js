import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';


const MovieList = ({movieData}) => {
  
    return (
      <ul className="App">
        {movieData.map((movie, index) => {
            return  <li key={index}>
                      <Link to={`/movie/${movie.movieId}`}>
                        <img src = {movie.poster} alt={movie.title} width="250"/>
                      </Link>
                    </li>
        })}
      </ul>
    );
  }
  
  export default MovieList;