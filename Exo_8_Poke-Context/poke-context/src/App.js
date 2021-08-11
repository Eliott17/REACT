import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { createContext, useState } from "react";

// CSS
import "./bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component
import Home from "./Component/Home.js";
import Login from "./Component/Login.js";


export const UserContext = createContext(false);

const App = () => {

	const [isLogged, setLogged] = useState(false);

	const setAuth = () => {
		setLogged(true)
	}

	const value = {
		isLogged: isLogged,
		setAuth: setAuth,
	}

	return (
		<BrowserRouter>
			<div>
				<nav>
					<Link to="/">Home</Link>
					{(value.isLogged === false)
						? <Link to="/login">Log in</Link>
						: <Link to="/login">Log out</Link>
					}
				</nav>

				<UserContext.Provider value={value}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</UserContext.Provider>
			</div>
		</BrowserRouter>
	)

}

export default App;
