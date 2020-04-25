import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./MovieList.css";

class MovieInventory extends Component {
	render() {
		return (
			<div className="ListDiv">
				<p className="Announce">Coming Soon!</p>
				<p>Movie List</p>
			</div>
		);
	}
}

export default MovieList;
