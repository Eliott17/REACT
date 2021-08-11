import React from "react";

// CSS
import "./Card.css";

class Card extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div className="main-card">
                <img className="card-image" width="100%" src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`} alt={this.props.movie.title} />
                <div className="title-div">
                    <h1>{this.props.movie.title}</h1>
                </div>
                <div className="text-div">
                    <p>{this.props.movie.release_date}</p>
                    {(this.props.movie.overview.length > 320)
                        ? <p>{this.props.movie.overview}</p>
                        : <p>{this.props.movie.overview}</p>
                    }
                </div>
            </div>
        )
    }

}

export default Card;