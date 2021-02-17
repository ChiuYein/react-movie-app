import React from 'react';
import MovieDetails from './movieDetails'

class MovieCard extends React.Component {

    render(){
        return (
            <div className="card">
                <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.movie.poster_path}`}
                alt={this.props.movie.title +  ' poster'}
                />
                <div className="card--content">
                    <h3 className="card--title">
                        {this.props.movie.title}
                    </h3>
                    <p><small> 
                        RELEASE DATE: {this.props.movie.release_date} 
                    </small></p>
                    
                    <p><small> 
                        Popularity: {this.props.movie.popularity} 
                    </small></p>


                    <button className="view-btn btn btn-primary" onClick={MovieDetails.bind(this)}>
                        Movie Details
                    </button>
                </div>
            </div>
        )
    }
}

export default MovieCard