import React, { Component } from "react";
import "../styles/MovieDetail.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

//STRETCH - on refresh url /details/1 for movie id 1

class MovieDetail extends Component {
	movieListReturn() {
		this.props.history.push("/MovieList");
	}

	goEditMovie() {
		this.props.history.push("/EditMovie");
	}

	render() {
		return (
			<div className="DetailDiv">
				<button onClick="movieListReturn">Back to List</button>
				<button onClick="goEditMovie">Edit This Movie Entry</button>
				<p className="Announce">Coming Soon!</p>
				<p>Movie Title</p>
				<p>Genres...displays array if multiple genres</p>
				<p>Movie Detail</p>
				<hr />
			</div>
		);
	}
}

export default MovieDetail;
