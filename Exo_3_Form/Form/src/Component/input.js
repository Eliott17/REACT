import React from "react";

class Input extends React.Component {

    constructor() {
        super();

        this.state = {
            isSubmit: false,
            isValidEmail: false,
            email: "",
            password: "",
            isValidPassword: false,
        };
    }

    handleOnChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
        let patt = new RegExp(/^[a-zA-Z0-9.!#$%&'+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/);
        if (patt.test(this.state.email)) {
            this.setState({
                isValidEmail: true,
            })
        } else {
            this.setState({
                isValidEmail: false,
            })
        }
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
        if (this.state.password.length > 5) {
            this.setState({
                isValidPassword: true,
            })
        } else {
            this.setState({
                isValidPassword: false,
            })
        }
    }
    onSubmitChange = () => {
        this.setState({
            isSubmit: true,
        })
    }

    onValidChangePassword = () => {
        this.setState({
            isValidPassword: true,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

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
                            onChange={this.handleOnChangeEmail}
                            className={(this.state.isValidEmail)
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                            }
                            id="inputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email..."
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
                            onChange={this.handleOnChangePassword}
                            className={(this.state.isValidPassword)
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                            }
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
                        ? { backgroundColor: "grey", height: "300px", width: "60%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", borderRadius: "5%" }
                        : { display: "none" }
                    }
                    {...console.log(this.state)}
                >Form Submitted !
                </div>
            </div >
        )
    }
}

export default Input;