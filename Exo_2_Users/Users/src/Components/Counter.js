import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", width: "200px", alignItems: "center" }}>
                    <button style={{ backgroundColor: "red", borderRadius: "50%", width: "50px", height: "50px" }} onClick={this.props.subtractFunction}>-</button>
                    <h2 style={{ color: "purple", fontSize: "40px" }}>{this.props.count}</h2>
                    <button style={{ backgroundColor: "green", borderRadius: "50%", width: "50px", height: "50px" }} onClick={this.props.addFunction}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter