import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// CSS
import "./bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component
import Home from "./Component/Home.js";
import Login from "./Component/Login.js";


const App = () => {

	return (
		<BrowserRouter>
			<div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/Login">Login</Link>
				</nav>


				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Login" component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
	)

}

export default App;
