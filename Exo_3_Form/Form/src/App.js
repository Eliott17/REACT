import React from "react";
import "./bootstrap/dist/css/bootstrap.min.css";
import Input from "./Component/input";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <Input />
            </div>
        )
    }
}

export default App;