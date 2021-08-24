import React from "react";

// CSS
import "./Counter.css"

class Counter extends React.Component {
    render() {
        return (
            <div className="main-div">
                <div className="count-div">
                    <button className="add-button" onClick={this.props.subtractFunction}>-</button>
                    <h2 className="count">{this.props.count}</h2>
                    <button className="sub-button" onClick={this.props.addFunction}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter