import React from "react";
import "./Review.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { HashRouter as Router, useHistory } from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
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
    <main>
      <section>
      <h2>Feedback Summary</h2>
      <div id="card">
        <table>
          <tr>
            <td id="category">Feeling</td>
            <td>{feelingData}</td>
          </tr>
          <tr>
            <td id="category">Understanding</td>
            <td>{understandingData}</td>
          </tr>
          <tr>
            <td id="category">Support</td>
            <td>{supportData}</td>
          </tr>
          <tr>
            <td id="comment">Comment</td>
            <td id= "commentData">{commentsData}</td>
          </tr>
        </table>
        </div>
        <Box className={classes.box}>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Box>
      </section>
    </main>
  );
}

export default Review;
