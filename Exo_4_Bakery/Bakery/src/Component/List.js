import React, { Component } from 'react'
import "../bootstrap/dist/css/bootstrap.min.css"

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.listItems.map(curr => {
                    return (
                        <li>{curr.name} - {curr.price} </li>
                    )
                })}
            </ul>
        )
    }
}
export default List