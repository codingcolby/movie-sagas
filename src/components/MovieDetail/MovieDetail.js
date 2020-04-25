import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./MovieDetail.css";

class MovieDetail extends Component {
	render() {
		return (
			<div className="DetailDiv">
				<p className="Announce">Coming Soon!</p>
				<p> Movie Detail</p>
			</div>
		);
	}
}

export default MovieDetail;
