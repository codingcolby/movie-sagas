import React, { Component } from "react";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";

class App extends Component {
	// Renders the entire app on the DOM
	render() {
		return (
			<div className="App">
				<h1>Movie Night Options!</h1>
				<div className="Temp_align">
					<MovieList />
					<MovieDetail />
				</div>
			</div>
		);
	}
}

export default App;
