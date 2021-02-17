import React, { useState } from 'react';
import MovieCard from './movieCard';


export default function FilterMovies() {
    
    const [movies, filterMovies] = useState([]);

    const fetchReleaseDateMovie =  async (e) => {
        e.preventDefault();

        const releaseDateMovieUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&primary_release_date.gte=2019-10-01&primary_release_date.lte=2021-01-01
        `
        console.log(releaseDateMovieUrl)

        try {
            const res = await fetch(releaseDateMovieUrl);
            const data = await res.json();
            filterMovies(data.results);
        } catch(err) {
            console.error(err);
        }
    }

    const fetchAlphabeticallyMovie =  async (e) => {
        e.preventDefault();

        const releaseDateMovieUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&primary_release_date.gte=2019-10-01&primary_release_date.lte=2021-01-01
        `
        console.log(releaseDateMovieUrl)

        try {
            const res = await fetch(releaseDateMovieUrl);
            const data = await res.json();
            filterMovies(data.results);
        } catch(err) {
            console.error(err);
        }
    }

    const fetchPopularMovies = async (e) => {
        e.preventDefault();

        const popularMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&sort_by=popularity.desc&languages=en-US`

        console.log(popularMovieUrl)

        try {
            const res = await fetch(popularMovieUrl);
            const data = await res.json();
            filterMovies(data.results);
        } catch(err) {
            console.error(err);
        }

    }
    return (
        <div className="sort-container">
            <form className="form">
                <button onClick={fetchReleaseDateMovie} className="release-date-btn"> Released Date </button>
                <button onClick={fetchAlphabeticallyMovie} className="alphabetically-btn"> Alphabetically </button>
                <button onClick = {fetchPopularMovies} className="popularity-btn"> Popularity </button>
            </form>

            <div className="movie-filter-list">
                <div className="row">
                    {movies.filter(movie => movie.poster_path).map(movie => 
                        <div className="col-lg-3">
                            <MovieCard movie= {movie} key={movie.id} />    
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

