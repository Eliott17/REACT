import React from "react";
import "./App.css";
import Counter from "./Components/Counter.js"
import users from "./users.json"
import UserInfo from "./Components/UserInfo.js"

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 10,
    }

  };

  addFunction = () => {
    if (this.state.count === 10) {
      return;
    }
    const newState = {
      ...this.state,
      count: this.state.count + 1,
    }
    this.setState(newState)
  }
  subtractFunction = () => {
    if (this.state.count === 1) {
      return;
    }
    const newState = {
      ...this.state,
      count: this.state.count - 1,
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <div>
          <div className="title-div">
            <h1>Counter</h1>
          </div>
          <Counter count={this.state.count} addFunction={this.addFunction} subtractFunction={this.subtractFunction} />
        </div>
        <div>
          {users.slice(0, this.state.count).map((user) => (
            <UserInfo id={user.id} name={user.name} email={user.email} key={user.id} />
          ))}
        </div>
      </div>

    );
  }
}

export default App;