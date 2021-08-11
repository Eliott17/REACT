import React from "react";

// CSS
import "./component.css";
import "./Card.css";

// Component
import Card from "./Card.js"


class PopularBattle extends React.Component {

    constructor() {

        super();

        this.state = {
            movies: [],
            currentBattle: 0,
        }
    }

    componentDidMount() {

        console.log("component is mounted");

        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d755e0cc34dd90b30dcf1df07f2fbc2")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        console.log(this.state.movies[0])

        return (
            <div className="main">
                {this.state.movies.slice(0, 2).map(movie =>
                    <Card movie={movie} key={movie.id} />)}
            </div>
        )
    }

}

export default PopularBattle;