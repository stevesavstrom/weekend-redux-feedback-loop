const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET route
router.get("/", (req, res) => {
  let queryText = 'SELECT title, author FROM "feedback" ORDER BY "id";';
  pool
    .query(queryText)
    .then((result) => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error getting feedback", error);
      res.sendStatus(500);
    });
});

// POST route
router.post("/", (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding book`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments)
	VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newFeedback.feeling,
      newFeedback.understanding,
      newFeedback.support,
      newFeedback.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
