import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';

const HomePage = () => {
    function MovieList(props) {
        return (
          <ul>
            {
              props.my_movies.map(movie => <li>{movie.name}</li>)

            }
          </ul>
        )
      }
      {
        let[movies, setMovies] = useState(null);
      
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
            <MovieList my_movies={(movies)}></MovieList>
          </>
        );
      }
    
    
}

export default HomePage;