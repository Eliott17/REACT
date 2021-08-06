import React from "react";

// CSS
import "./component.css";


class Popular extends React.Component {


    constructor() {

        super();

        this.state = {
            movies: [],
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
        console.log(this.state.movies)

        return (
            <div>
                <h1>Popular</h1>
            </div>
        )
    }

}

export default Popular;
