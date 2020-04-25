import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./MovieInventory.css";

class MovieInventory extends Component {
	render() {
		return (
			<div className="InventoryDiv">
				<p className="Announce">Coming Soon!</p>
				<p>Movie Inventory</p>
			</div>
		);
	}
}

export default MovieInventory;
