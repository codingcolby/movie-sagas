import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/MovieList.css";
import MovieListItem from "./MovieList";

// !!! PRACTICE BRANCHING

// MovieList is default "HOME" page for the app

// Styling - Add and be consistent between pages
// Styling - Consider grids for the movie posters

// STRETCH - display 10 ten
// STRETCH - user can search by title alt. server or client side
// STRETCH - display with genres

// nav to MovieDetails.js displaying click associated movie description - still to ADD - item

class MovieList extends Component {
	componentDidMount() {
		this.props.dispatch({ type: "READ_ALL_MOVIES" });
	}

	showDescription = (event, movie_id) => {
		this.props.history.push(`/${movie_id}`);
	};

	render() {
		//const itemID = `this.props.item.${movie_id}`;

		const movieListItem = this.props.reduxState.movieList.map((item, index) => (
			<div key={index}>
				<MovieListItem item={item} />
			</div>
		));

		return (
			<div className="ListDiv">
				<p className="Announce">Coming Soon!</p>
				<p>Movie List</p>

				{/* This may be in the form of a grid rather than a list */}
				<table>
					<tbody>
						<tr>
							<td
								onClick={(event) => {
									this.showDescription();
								}}
							>
								<img src="TBA" alt="Movie Poster" />
								<br />
								<p>Click on poster to visit the movie detail page</p>
							</td>
							<td>
								<pre>{movieListItem}</pre>
								Movie title
								<br />
								Description
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => ({ reduxState });

export default connect(mapStateToProps)(MovieList);
