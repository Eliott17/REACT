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

    handleSubmit = (e) => {
        e.preventDefault();
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
                <form
                    className="container"
                    onSubmit={this.handleSubmit}
                    style={(this.state.isSubmit)
                        ? { display: "none" }
                        : { display: "block" }
                    }>
                    <div className="mb-3">
                        <label
                            for="inputEmail"
                            className="form-label"
                        >Email address</label>
                        <input
                            type="email"
                            className="form-control border-danger is-invalid"
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
                            className="form-control border-danger is-invalid"
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
                        className="btn btn-primary"
                        onClick={this.onSubmitChange}
                    >Submit</button>
                </form>
                <div
                    style={(this.state.isSubmit)
                        ? { backgroundColor: "grey", height: "300px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", borderRadius: "5%" }
                        : { display: "none" }
                    }
                    {...console.log(this.state)}
                >Form Submitted !
                </div>
            </div>
        )
    }
}

export default Input;