import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../styles/Admin.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

//STRETCH - all stretch
//STRETCH - add link on home page (MovieList) to nav to Admin
//STRETCH - successful login displays AdminManageGenres to add genres, and a list of genres with "x" (checkbox?)to remove

function* movieListReturn() {
	// nav to MovieList.js
}

class Admin extends Component {
	render() {
		return (
			<div className="AdminDiv">
				<p className="Announce">Coming Soon!</p>
				<p> Admin Interface </p>
				<Router>
					<AdminLogin />
					<AdminManageGenres />
				</Router>
				<p> Successfully login to change genres</p>
				<button onClick="movieListReturn">Cancel</button>
			</div>
		);
	}
}

export default Admin;
