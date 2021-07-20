import React from "react";

class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <p>numéro: {this.props.id}</p>
                <p>{this.props.name}</p>
                <p> email: {this.props.email}</p>
            </div>
        );
    }
}

export default UserInfo;