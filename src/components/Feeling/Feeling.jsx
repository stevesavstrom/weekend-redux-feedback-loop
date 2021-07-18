import React from "react";
import "./Feeling.css";
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
    color: "#0089CC",
  },
  box: {
    margin: "30px",
  },
});

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feelingInput, setFeelingInput] = useState("");

  const handleChange = (event) => {
    setFeelingInput(event.target.value);
  };

  const classes = useStyles();

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "FEELING_DATA",
      payload: feelingInput,
    });
    history.push("/understanding");
  };

  return (
    <main>
      <section>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit} className="add-feeling-form">
          <FormControl component="fieldset" required>
            <RadioGroup
              aria-label="feeling"
              name="feeling"
              value={feelingInput}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="1"
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="2"
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="3"
              />
              <FormControlLabel
                value="4"
                control={<Radio required={true} />}
                label="4"
              />
              <FormControlLabel
                value="5"
                control={<Radio required={true} />}
                label="5"
              />
            </RadioGroup>
          </FormControl>

          <Box className={classes.box}>
            <Button className={classes.button} variant="outlined" type="submit">
              Next
            </Button>
          </Box>
          <p id="question">Question 1 of 4</p>
        </form>
      </section>
    </main>
  );
}

export default Feeling;
