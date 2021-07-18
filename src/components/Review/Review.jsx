import "./Review.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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

function Review() {
  const history = useHistory();
  const feelingData = useSelector((store) => store.feelingData);
  const understandingData = useSelector((store) => store.understandingData);
  const supportData = useSelector((store) => store.supportData);
  const commentsData = useSelector((store) => store.commentsData);

  const classes = useStyles();

  const handleSubmit = () => {
    event.preventDefault();

    const feedbackPost = {
      feeling: feelingData,
      understanding: understandingData,
      support: supportData,
      comments: commentsData,
    };

    axios
      .post("/feedback", feedbackPost)
      .then((response) => {
        console.log(response);
        history.push("/thankyou");
      })
      .catch((err) => {
        console.log("this is a Post error on Review.jsx", err);
      });

      
  };
  return (
    <>
      <section>
        <p>Feeling:</p>
        <p>{feelingData}</p>
        <p>Understanding:</p>
        <p>{understandingData}</p>
        <p>Support:</p>
        <p>{supportData}</p>
        <p>Comments:</p>
        <p id="comments"> {commentsData}</p>
      </section>

      <section>
      <Box className={classes.box}>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Next
          </Button>
        </Box>
      </section>
    </>
  );
}

export default Review;
