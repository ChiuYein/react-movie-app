import React, { useState } from 'react';
import MovieCard from './movieCard';
import FilterMovies from './movieFilter';


export default function SearchMovie(){

    
    //The first value is called query, and the second value is the function name.
    const [query, setQuery] = useState('');

    //create the state for movies
    const [movies, setMovies] = useState([]);

    
    const searchMovies = async (e) => {
        e.preventDefault();

        const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&query=${query}`;
        

        // Handle Error Message
        try {
            const res = await fetch(queryUrl);
            const data  = await res.json();
            setMovies(data.results);
        } catch(err){
            console.error(err);
        }
    }


    return(
        <>       
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">
                    Search Movie : 
                </label>

                <input className="input" 
                    type="text" 
                    name="query" 
                    value={query} 
                    placeholder="Search for a movie.." 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button className="button" type="submit"> 
                  Search 
                </button>

            </form>
            <div>
                <FilterMovies />
            </div>

            <div className="movies-card-list">
                <div className="row">
                    {movies.filter(movie => movie.poster_path).map(movie => 
                        <div className="col-lg-3">
                             <MovieCard movie={movie} key={movie.id} />
                        </div>    
                    )}
                </div>                             
            </div>

        </>
    )
}

