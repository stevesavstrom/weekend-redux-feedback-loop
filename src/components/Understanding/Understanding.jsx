import React from "react";
import "./Understanding.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, useHistory } from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

// Material-UI Styles
const useStyles = makeStyles({
  button: {
    width: "250px",
    padding: "10px",
  },
  box: {
    margin: "30px",
  },
});

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understandingInput, setUnderstandingInput] = useState("");

  const handleChange = (event) => {
    setUnderstandingInput(event.target.value);
  };

  const classes = useStyles();

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "UNDERSTANDING_DATA",
      payload: understandingInput,
    });
    history.push("/support");
  };

  return (
    <main>
      <section>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={handleSubmit} className="add-understanding-form">
          <FormControl component="fieldset" required>
            <RadioGroup
              aria-label="understanding"
              name="understanding"
              value={understandingInput}
              onChange={handleChange}
            >
              <FormControlLabel
                value="5"
                control={<Radio required={true} />}
                label="5: I'm mastering it."
              />
              <FormControlLabel
                value="4"
                control={<Radio required={true} />}
                label="4: I'm getting the hang of it."
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="3: I'm making some progress."
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="2: I need help."
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="1: I'm completely lost."
              />
            </RadioGroup>
          </FormControl>

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
          <p id="question">Question 2 of 4</p>
        </form>
      </section>
    </main>
  );
}

export default Understanding;
