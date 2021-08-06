import React, { Component } from 'react'
import "../bootstrap/dist/css/bootstrap.min.css"

class Button extends Component {

    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={this.props.isSelected === true ? "btn btn-primary" : "btn btn-light"}
                type="button">
                {this.props.children}
            </button>
        )
    }
}

export default Button