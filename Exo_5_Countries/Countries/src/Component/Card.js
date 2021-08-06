import React from "react"
import "../bootstrap/dist/css/bootstrap.min.css"

class Card extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ border: "1px solid lightgrey", width: "350px", height: "35   0px", fontSize: "1.2rem", paddingLeft: "10px", paddingRight: "10px" }}>
                    <img src={this.props.info.flag} style={{ width: "100%", height: "175px", marginBottom: "50px", marginTop: "10px", borderRadius: "5%" }} />
                    <p>Nom: {this.props.info.name}</p>
                    <p>Capital: {this.props.info.capital}</p>
                    <p>Région: {this.props.info.region}</p>
                    <p>Population: {this.props.info.population}</p>
                </div>
            </div>
        )
    }
}

export default Card;