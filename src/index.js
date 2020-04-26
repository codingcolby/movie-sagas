import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
// Import project file dependencies
import "../src/components/styles/index.css";
import App from "./components/App/App.js";

// STRETCH - move sagas and reducers into separate files ex: src/redux/reducers and src/redux/sagas

function* readAllMovies(action) {
	try {
		const response = yield axios.get("/api/movie");
		yield put({ type: "READ_ALL_MOVIES", payload: response.data });
	} catch (err) {
		console.log("Error in readAllMovies:", err);
	}
}

function* readMovie(action) {
	try {
		const response = yield axios.get("/api/movie");
		yield put({ type: "READ_MOVIE", payload: response.data });
	} catch (err) {
		console.warn("Error with readMovie:", err);
	}
}

function* readGenre(action) {
	try {
		yield axios.get("api/movie, action.payload");
		yield put({ type: "READ_GENRE" });
	} catch (err) {
		console.log("Error in readGenre:", err);
	}
}
function* updateMovie(action) {
	try {
		yield axios.put("api/movie, action.payload");
		yield put({ type: "UPDATE_MOVIE" });
	} catch (err) {
		console.log("Error in updateMovie:", err);
	}
}
function* createGenre(action) {
	try {
		yield axios.post("api/movie, action.payload");
		yield put({ type: "CREATE_GENRE" });
	} catch (err) {
		console.log("Error in createGenre:", err);
	}
}

function* updateGenre(action) {
	// add a switch between movie and genre?
	try {
		yield axios.put("api/movie, action.payload");
		yield put({ type: "UPDATE_GENRE" });
	} catch (err) {
		console.log("Error in updateGenre:", err);
	}
}

function* disposeGenre(action) {
	try {
		yield axios.delete("api/movie, action.payload");
		yield put({ type: "DISPOSEOF" });
	} catch (err) {
		console.log("Error in disposeGenre:", err);
	}
}
// STRETCH
// function* authenticateAdmin(action)  {
// 	try {
// 		yield axios.?? ("api/movie, action.payload");
// 		yield ?? ({ type: "AUTHENTICATE" });
// 	} catch (err) {
// 		console.log("Error in authenticateAdmin", err);
// 	}
// }

// Create the rootSaga generator function
function* rootSaga() {
	yield takeEvery("CREATE_GENRE", createGenre);
	yield takeEvery("READ_ALL_MOVIES", readAllMovies);
	yield takeEvery("READ_MOVIE", readMovie);
	yield takeEvery("READ_GENRE", readGenre);
	yield takeEvery("UPDATE_MOVIE", updateMovie);
	yield takeEvery("UPDATE_GENRE", updateGenre);
	yield takeEvery("DISPOSEOF_GENRE", disposeGenre);
	// yield takeEvery("AUTHENTICATE", authenticate);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case "CREATE":
			return action.payload;
	}
	switch (action.type) {
		case "READ":
			return action.payload;
	}
	switch (action.type) {
		case "UPDATE":
			return action.payload;
	}
	switch (action.type) {
		case "DISPOSE":
			return action.payload;
	}
	return state;
};

// Used to store the movie genres
const genresReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_GENRES":
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		moviesReducer,
		genresReducer,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
