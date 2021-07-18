import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./Comments.css";

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
      </form>
    </section>
  );
}

export default Comments;
