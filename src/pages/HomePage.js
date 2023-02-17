import React from "react";
import '../App.css';

const HomePage = (props) => {
      
        return(
          <>
            <ui>
              {props.movie.map(movies => [
                <li key = {movies.id}>Name: {movies.name}</li>,
                <li>Release Date: {movies.releaseDate}</li>,
                <li>Actors: {movies.actors}</li>,
                <li>Rating: {movies.rating}</li>,
                <p><img src={movies.poster} alt="poster"></img></p>
                
              ])}
            </ui>
          </>
        );
      
    
    
}

export default HomePage;