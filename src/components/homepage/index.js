import React from 'react';
import './styles.css';
import SearchMovies from "./searchMovie";
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
    render(){
        return (
            <div className="logo-container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies />
            </div>
        );
    }
}





export default Main