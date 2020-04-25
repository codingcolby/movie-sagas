import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../styles/MovieDetail.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

//STRETCH - on refresh url /details/1 for movie id 1

function* movieListReturn() {
	// nav to MovieList.js
}

function* goEditMovie() {
	// nav to EditMovie.js
}

class MovieDetail extends Component {
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
