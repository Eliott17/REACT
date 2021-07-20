import React from "react";

class Input extends React.Component {

    constructor() {
        super();

        this.state = {
            isSubmit: false,
        };
    }

    onSubmitChange = () => {
        this.setState({
            isSubmit: true,
        })
    }

    // onFocusChange = () => {
    //     this.setState({
    //         isFocused: true
    //     });
    // }
    // onChangeChange = () => {
    //     this.setState({
    //         ischanged: true
    //     })
    // }

    render() {
        return (
            <div>
                <form className="container">
                    <div className="mb-3">
                        <label
                            for="inputEmail"
                            className="form-label"
                        >Email address</label>
                        <input
                            type="email"
                            className="form-control border-danger"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email..."
                        // onFocus={this.onFocusChange}
                        // style={(this.state.isFocused)
                        //     ? { border: "3px solid red", outline: "3px solid red" }
                        //     : { border: "1px lightgrey black" }
                        // }
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label
                            for="inputPassword"
                            className="form-label"
                        >Password
                        </label>
                        <input
                            type="password"
                            className="form-control border-danger"
                            id="inputPassword"
                            placeholder="Enter password..."
                        ></input>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                        ></input>
                        <label
                            className="form-check-label"
                            for="rememberMe"
                        >Remember me</label>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        onSubmit={this.onSubmitChange}
                    >Submit</button>
                </form>
                <div
                    style={(this.state.isSubmit)
                        ? { display: "block", backgroundColor: "grey" }
                        : { display: "none" }
                    }
                >Form Submitted !</div>
            </div>
        )
    }
}

export default Input;