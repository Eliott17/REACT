import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// CSS
import "./bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

// Component
import Favorites from "./Component/Favorites.js";
import Home from "./Component/Home.js";
import Popular from "./Component/Popular.js";
import PopularBattle from "./Component/PopularBattle.js";
import Weekly from "./Component/Weekly.js";
import WeeklyBattle from "./Component/WeeklyBattle.js";


class App extends React.Component {

  render() {

    return (

      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">Home</Link>
              <Link to="/weekly" className="navbar-brand">Weekly</Link>
              <Link to="/weekly-battle" className="navbar-brand">Weekly Battle</Link>
              <Link to="/popular" className="navbar-brand">Popular</Link>
              <Link to="/popular-battle" className="navbar-brand">Popular Battle</Link>
              <Link to="/favorites" className="navbar-brand">Favorites</Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weekly" component={Weekly} />
            <Route path="/weekly-battle" component={WeeklyBattle} />
            <Route path="/popular" component={Popular} />
            <Route path="/popular-battle" component={PopularBattle} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }

}

export default App;
