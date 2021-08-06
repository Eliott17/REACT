import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// CSS
import "./App.css"

// JSON
import Data from "./film.json"

// Component
import Home from "./Component/Home";
import NotFound from "./Component/404NotFound";

class App extends React.Component {


  constructor() {

    super();

    this.state = {

    }
  }

  render() {

    return (
      <BrowserRouter>
        <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
