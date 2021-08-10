import React from "react";

// CSS
import "./Card.css";

class Card extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="main-card">
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`} />
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.release_date}</p>
                <p>{this.props.movie.overview}</p>
            </div>
        )
    }

}

export default Card;