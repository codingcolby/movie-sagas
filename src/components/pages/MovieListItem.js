import React, { Component } from "react";

class MovieListItem extends Component {
	render() {
		return (
			<div>
				<p>{this.props.item.poster}</p>;<p>{this.props.item.title}</p>;
				<p>{this.props.item.description}</p>;
			</div>
		);
	}
}

export default MovieListItem;
