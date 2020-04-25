import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./sytles/EditMovie.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

// STRETCH - on refresh url /edit/1 for movie id 1
// STRETCH - add genre(s?) to movie
// STRETCH - remove genre(s?) from movie

function* cancel_detailReturn() {
	// no changes, nav to MovieDetail.js
}

function* saveMovieEditToDB_detailReturn() {
	// save title and description input to DB, nav to MovieDetail.js
}

// Refer to the user's movie selection to establish visual continuity when page loads - see line 21

class EditMoviePage extends Component {
	render() {
		return (
			<div className="EditDiv">
				<p className="Announce">Coming Soon!</p>
				<p> Edit Page for [selected movie title]</p>
				<input>Change Title - Stretch pre-populate with current</input>
				<textarea>
					Change Description - Stretch pre-populate with current
				</textarea>
				<button onClick="cancel_detailReturn">Cancel</button>
				<button onClick="saveMovieEditToDB_detailReturn">Save</button>
			</div>
		);
	}
}

export default EditMoviePage;
