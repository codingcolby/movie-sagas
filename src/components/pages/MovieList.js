import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../styles/MovieList.css";

// !!! PRACTICE BRANCHING

// MovieList is default "HOME" page for the app

// Styling - Add and be consistent between pages
// Styling - Consider grids for the movie posters

// STRETCH - display 10 ten
// STRETCH - user can search by title alt. server or client side
// STRETCH - display with genres

function* showDescription() {
	// nav to MovieDetails.js displaying click associated movie description
}

class MovieList extends Component {
	render() {
		return (
			<div className="ListDiv">
				<p className="Announce">Coming Soon!</p>
				<p>Movie List</p>
				{/* This may be in the form of a grid rather than a list */}
				<table>
					<tr>
						<td>
							<img src="TBA" onClick="showDescription" alt="Movie Poster" />
							<br />
							<p>Click on poster to visit the movie detail page</p>
						</td>
						<td>
							Movie title
							<br />
							Description
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default MovieList;
