import React from "react";
import "./Comments.css";
import { HashRouter as Router, useHistory, } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

// Material-UI Styles
const useStyles = makeStyles({
  button: {
    width: "250px",
    padding: "10px",
  },
  text: {
    width: "600px",
  },
  box: {
    margin: "30px",
  },
});

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [commentsInput, setCommentsInput] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setCommentsInput(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "COMMENTS_DATA",
      payload: commentsInput,
    });
    history.push("/review");
  };

  return (
    <main>
    <section>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit} className="add-comments-form">
        <TextField
        className={classes.text}
          id="outlined-multiline-flexible"
          label="Comments"
          multiline
          maxRows={4}
          value={commentsInput}
          onChange={handleChange}
          variant="outlined"
        />

        <Box className={classes.box}>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Next
          </Button>
        </Box>
        <p id="question">Question 4 of 4</p>
      </form>
    </section>
    </main>
  );
}

export default Comments;
