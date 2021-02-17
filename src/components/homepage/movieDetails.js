import React from 'react';


export default function MovieDetails(props) {
    console.log(this.props.movie.title)
    console.log(this.props.movie.overview)
    console.log(this.props.movie.genres_ids)
    console.log(this.props.movie.original_language)
    console.log(this.props.movie.runtime)
    

    return (
        <div className="movie-details">
            <div className="content">
                <h2>{this.props.movie.title}|
                <span>{this.props.movie.original_language}</span>
                <span>{this.props.movie.runtime}</span>
                </h2>
            <p className="synopsis">
                Synopsis: {this.props.movie.overview} 
            </p>
            {/* <p className="genres">
                Genres: {this.props.movie.genres_ids} 
            </p> */}
            </div>

        </div>
    )
}

