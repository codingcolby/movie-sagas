import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/MovieList.css";
import MovieListItem from "./MovieListItem";

// !!! PRACTICE BRANCHING

// MovieList is default "HOME" page for the app

// Styling - Add and be consistent between pages
// Styling - Consider grids for the movie posters

// STRETCH - display 10 ten
// STRETCH - user can search by title alt. server or client side
// STRETCH - display with genres

// nav to MovieDetails.js displaying click associated movie description - still to ADD - item

class MovieList extends Component {
	// componentDidMount() {
	// 	this.props.dispatch({ type: "READ_ALL_MOVIES" });
	// }

	// showDescription = (event, movie_id) => {
	// 	this.props.history.push(`/${movie_id}`);
	// };

	render() {
		//const itemID = `this.props.item.${movie_id}`;

		const movieListItems = this.props.reduxState.movieList.map(
			(item, index) => (
				<div key={index}>
					<MovieListItem item={item} />
				</div>
			)
		);

		return (
			<div>
				<h2>Current movies available are:</h2>
				<pre>{movieListItems}</pre>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => ({
	reduxState,
});

export default connect(mapStateToProps)(MovieList);
