import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../styles/Admin.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

//STRETCH - all stretch
//STRETCH - login input: username (camera), password (action) returns Admin Interface with AdminManageGenres Route

function* AddGenreToDB() {
	// adds genre input to the database, should return a confirmation such as a refreshed list display or error
}

function* DeleteGenreFromDB() {
	// removes selected genres from the database, should return a confirmation such as a refreshed list display or error
}

function* movieListReturn() {
	// nav to MovieList.js
}

class AdminManageGenres extends Component {
	render() {
		return (
			<div className="AdminDiv">
				<p className="Announce">Coming Soon!</p>
				<p> Admin Manage Genres</p>
				<form>
					<input>New Genres</input>
					<button onClick="AddGenreToDB">Add Genre</button>

					{/* display all genres with a default "selected" checkbox indicating *removal* from database } */}
					<button onSubmit="DeleteGenreFromDB" className="RemoveGenres">
						RemoveGenres
					</button>
				</form>
				<button onClick="movieListReturn">Back to List</button>
			</div>
		);
	}
}

export default AdminManageGenres;
