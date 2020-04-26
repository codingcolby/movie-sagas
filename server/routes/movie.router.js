const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// ----- MOVIES -----
// FOR QUICK REFERENCE
// movies = {
// 	movie_id: "",
// 	title: "",
// 	poster: "",
// 	description: "",
// };

router.get("/movies", (req, res) => {
	const queryText = "SELECT * FROM movies";
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("Error completing SELECT movie query", err);
			res.sendStatus(500);
		});
});

router.get("/details/:movie_id", (req, res) => {
	const queryText = `SELECT "movies".title, "movies".description, "genres".name 
	FROM "movies"
	JOIN "genre_associations" ON "movies".movie_id = "genre_associations".movie_id 
	JOIN "genres" ON "genre_associations".genre_id = "genres".genre_id 
	WHERE "movies".movie_id=$1;`;

	pool
		.query(queryText, [req.params.movie_id])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("Error completing SELECT moviedetail query", err);
			res.sendStatus(500);
		});
});

router.put("/edit", (req, res) => {
	const updateMovie = req.body;

	const queryText = `UPDATE movie 
	SET 
	"movie_id" = $1,
	"title" = $2,
	"poster" = $3,
	"description" = $4, 
	WHERE movie_id=$1;`;

	const queryValues = [
		updateMovie.movie_id,
		updateMovie.title,
		updateMovie.poster,
		updateMovie.description,
	];

	pool
		.query(queryText, queryValues)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log("Error completing UPDATE movie query", err);
			res.sendStatus(500);
		});
});

// ----- GENRES -----
// FOR QUICK REFERENCE
// genres = {
// 	genre_id: "",
// 	name: "",
// };

// -- STRETCH --
// router.post("/", (req, res) => {
// 	const newGenre = req.body;
// 	const queryText = `INSERT INTO genre ("name")
//                     VALUES ($1)`;
// 	const queryValues = [newGenre.name];
// 	pool
// 		.query(queryText, queryValues)
// 		.then(() => {
// 			res.sendStatus(201);
// 		})
// 		.catch((err) => {
// 			console.log("Error completing INSERT genre query", err);
// 			res.sendStatus(500);
// 		});
// });

// router.put("/admingenre", (req, res) => {
// 	const update = req.body;

// 	const queryText = `UPDATE genre
//   SET
// "name" = $2,
//   WHERE genre_id=$1;`;

// 	const queryValues = [updateGenre.genre_id, updateGenre.name];

// 	pool
// 		.query(queryText, queryValues)
// 		.then(() => {
// 			res.sendStatus(200);
// 		})
// 		.catch((err) => {
// 			console.log("Error completing UPDATE genre query", err);
// 			res.sendStatus(500);
// 		});
// });

// router.delete("/admingenre", (req, res) => {
// 	const queryText = "DELETE * FROM genre WHERE genre_id=$1";
// 	pool
// 		.query(queryText, [req.params.genre_id])
// 		.then(() => {
// 			res.sendStatus(200);
// 		})
// 		.catch((err) => {
// 			console.log("Error completing DELETE genre query", err);
// 			res.sendStatus(500);
// 		});
// });

module.exports = router;
