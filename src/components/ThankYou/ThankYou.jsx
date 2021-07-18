import axios from "axios";
import { useDispatch } from "react-redux";

import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./ThankYou.css";

const useStyles = makeStyles({
  button: {
    width: "250px",
    padding: "10px",
  },
  box: {
    margin: "30px",
  },
  done: {
    fontSize: "150px",
    color: "#6ecfff"
  },
});

function ThankYou() {
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = () => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <main>
      <section>
        <h2>Thank you for submitting feedback!</h2>
        <CheckCircleIcon className={classes.done} />
        <form onSubmit={handleSubmit} className="thank-you-form">
          <Box className={classes.box}>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Start Over
            </Button>
          </Box>
        </form>
      </section>
    </main>
  );
}

export default ThankYou;
