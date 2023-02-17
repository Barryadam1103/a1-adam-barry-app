//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from "react";
const AddMovie = (props) => {

        const movieName = useRef();
        const moviereleaseDate = useRef();
        const movieActors = useRef();
        const movieRating = useRef();
        const moviePoster = useRef();
    
    
        const submit = (event) => {
            event.preventDefault();
            
            const name = movieName.current.value;
            const releaseDate = moviereleaseDate.current.value;
            const actors = movieActors.current.value;
            const rating = movieRating.current.value;
            const poster = moviePoster.current.value;
    
            movieName.current.value = "";
            moviereleaseDate.current.value = "";
            movieActors.current.value = "";
            movieRating.current.value = "";
            moviePoster.current.value = ""
    
    
    
        }
        return (
            <form onSubmit={submit}>
                <div>
                            <label>Movie Title:<input ref={movieName} type="text" required /></label>
                        </div>
    
                        <div>
                            <label>Release Date:<input ref={moviereleaseDate} type="text" required /></label>
                        </div>
    
                        <div>
                            <label>Actors:<input ref={movieActors} type="text" required /></label>
                        </div>
    
                        <div>
                            <label>Rating:<input ref={movieRating} type="text" required/></label>
                        </div>
    
                        <div>
                            <label>Poster:<input ref={moviePoster} type="text" required/></label>
                        </div>
    
                        <div>
                            <button onClick={submit}>Submit</button>
                        </div>
    
    
    
            </form>
        
    )};
    





export default AddMovie;