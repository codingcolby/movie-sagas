import React, { Component } from "react";
import "../styles/App.css";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import EditMovie from "../pages/EditMovie";

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
						<MovieList />
						<MovieDetail />
						<EditMovie />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
