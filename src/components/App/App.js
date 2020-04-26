import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "../styles/App.css";
import MovieList from "../pages/MovieList";
// import MovieDetail from "../pages/MovieDetail";
// import EditMovie from "../pages/EditMovie";

// Styling - Add and be consistent between pages
// Styling - Consider route change animations

class App extends Component {
	// Renders the entire app on the DOM
	render() {
		return (
			<div className="App">
				<h1>Movie Night Options!</h1>
				<Router>
					<div className="Temp_align">
						<Route path="/">
							<MovieList />
						</Route>
						{/* <Route path="/MovieDetail">
							<MovieDetail />
						</Route>
						<Route path="/EditMovie">
							<EditMovie />
						</Route> */}
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
