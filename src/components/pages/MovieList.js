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
	showDescription = (event, id) => {
		this.props.dispatch({ type: "READ_MOVIE", payload: id });
		this.props.history.push(`/MovieDetail/${id}`);
	};

	render() {
		const itemID = this.props.item.id;

		const movieListItems = this.props.reduxState.movieList.map(
			(item, index) => (
				<div key={index}>
					<MovieListItem item={item} />
				</div>
			)
		);

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
									this.showDescription(event, itemID);
								}}
							>
								<img src="TBA" alt="Movie Poster" />
								<br />
								<p>Click on poster to visit the movie detail page</p>
							</td>
							<td>
								<pre>{movieListItems}</pre>
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

const mapStateToRedux = (reduxState) => ({ reduxState });

export default connect(mapStateToRedux)(MovieList);
