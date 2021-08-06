import React from "react"

// CSS
import "../CSS/Home.css"

// JSON
import Data from "../film.json"

// Data.map(movie => { console.log(movie.title) })

class Home extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {Data.map(movie => (
                        <li>{movie.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Home;
