import React from "react";

// CSS
import "./UserInfo.css"

class UserInfo extends React.Component {
    render() {
        return (
            <div className="main-div">
                <div className="user-div">
                    <p>id number: {this.props.id}</p>
                    <p>{this.props.name}</p>
                    <p> email: {this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default UserInfo;