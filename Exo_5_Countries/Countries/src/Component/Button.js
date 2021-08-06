import React from "react"
import "../bootstrap/dist/css/bootstrap.min.css"

class Button extends React.Component {

    render() {
        return (
            <div>
                <button
                    style={{ margin: "5px" }}
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default Button