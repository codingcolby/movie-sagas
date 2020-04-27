import React from "react";
import Vault from "../pages/Vault";
import { HashRouter as Router, Route } from "react-router-dom";
import "../styles/App.css";

// import MovieDetail from "../pages/MovieDetail";
// import EditMovie from "../pages/EditMovie";

// Styling - Add and be consistent between pages
// Styling - Consider route change animations

const App = () => (
	// class App extends Component {
	// 	// Renders the entire app on the DOM
	// 	render() {
	// 		return (

	<div className="App">
		<header className="App-header">
			<h1>Movie Night Options!</h1>
		</header>
		<div className="Temp_align">
			<Router>
				<Route exact path="/" component={Vault} />
			</Router>
		</div>
	</div>
);

export default App;
