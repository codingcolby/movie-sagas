import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../styles/Admin.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

//STRETCH - all stretch
//STRETCH - login input: username (camera), password (action) returns Admin Interface with AdminManageGenres Route

function* authenticateThenNav() {
	// check Credentials, if success return to Admin and display AdminManageGenres
	// else return error/retry/rejection alert
}

function* movieListReturn() {
	// nav to MovieList.js
}

class AdminLogin extends Component {
	render() {
		return (
			<div className="AdminDiv">
				<p className="Announce">Coming Soon!</p>
				<p> Admin Login</p>
				<input>Username</input>
				<input>Password</input>
				<button onClick="authenticateThenNav">Login</button>
				<button onClick="movieListReturn">Cancel</button>
			</div>
		);
	}
}

export default AdminLogin;
