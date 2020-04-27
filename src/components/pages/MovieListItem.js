import React, { Component } from "react";
import "../styles/MovieList.css";

class MovieListItem extends Component {
	render() {
		return (
			<p>
				{this.props.store.item.poster}
				{this.props.store.item.title}
				{this.props.store.item.description}
			</p>
		);
	}
}

export default MovieListItem;
