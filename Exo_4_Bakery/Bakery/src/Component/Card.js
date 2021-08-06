import React from "react"
import "../bootstrap/dist/css/bootstrap.min.css"

class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            image: "./public/image/item.png"
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.onClick(this.props.productname, this.props.price)}>
                    <img src={this.state.image} alt="item" />
                </button>
                {this.props.productname}
                {this.props.price}
            </div>
        )
    }
}

export default Card;