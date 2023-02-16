import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';

const HomePage = () => {
      
        const [movies, setMovies] = useState(null);
      
        useEffect( () => {
          fetch("./movies.json")
          .then( response => response.json() )
          .then( setMovies )
          .catch(e => console.log(e.message))
        }, [])
      
        if (movies == null ) {
          return <h1>Loading.....</h1>
        }
      
        return(
          <>
            <ui>
              {movies.map(movie => [
                <li key = {movie.id}>Name: {movie.name}</li>,
                <li>Release Date: {movie.releaseDate}</li>,
                <li>Actors: {movie.actors}</li>,
                <li>Rating: {movie.rating}</li>,
                <p><img src={movie.poster} alt="poster"></img></p>
                
              ])}
            </ui>
          </>
        );
      
    
    
}

export default HomePage;