import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/EditMovie.css";

// !!! PRACTICE BRANCHING

// Styling - Add and be consistent between pages

// STRETCH - on refresh url /edit/1 for movie id 1
// STRETCH - add genre(s?) to movie
// STRETCH - remove genre(s?) from movie

class EditMovie extends Component {
	state = {
		updateMovie: {
			// movie_id: "",
			title: "",
			description: "",
		},
	};

	// modify and use later if input and textarea will autopopulate based on movie_id when page loads for title only, or title and description
	// componentDidMount() {
	// 	this.props.dispatch({ type: "READ" });
	// }

	handleChanges = (event, property) => {
		this.setState({
			updateMovie: {
				...this.state.updateMovie,
				[property]: event.target.value,
			},
		});
	};

	// no changes: clears input, navs to MovieDetail.js
	cancel_detailReturnClick = (event) => {
		this.setState({
			// movie_id: "",
			title: "",
			description: "",
		});
		// nav to MovieDetail.js
		this.props.history.push("/MovieDetail");
	};

	// save title and description input to DB, clears input and textarea, navs to MovieDetail.js
	saveMovieEditToDB_detailReturnClick = (event) => {
		this.props.dispatch({
			type: "UPDATE",
			payload: this.state.updateMovie,
		});
		this.setState({
			// movie_id: "",
			title: "",
			description: "",
		});
		this.props.history.push("/MovieDetail");
	};

	// Show user's movie selected title to establish visual continuity when page loads - see line 67

	render() {
		return (
			<div className="EditDiv">
				<p className="Announce">
					Edit Page for {this.redux.store.moviesReducer.title}
				</p>
				<input
					type="text"
					default={this.redux.store.moviesReducer.title}
					value={this.state.updateMovie.title}
					onChange={(event) => {
						this.handleChanges(event, "title");
					}}
				/>
				<textarea
					type="text"
					default={this.redux.store.moviesReducer.description}
					value={this.state.updateMovie.description}
					onChange={(event) => {
						this.handleChanges(event, "description");
					}}
				></textarea>
				<button onClick={this.cancel_detailReturnClick}>Cancel</button>
				<button onClick={this.saveMovieEditToDB_detailReturnClick}>Save</button>
			</div>
		);
	}
}

const mapStoreToRedux = (store) => ({
	store,
});

export default connect(mapStoreToRedux)(EditMovie);
