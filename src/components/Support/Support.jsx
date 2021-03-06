import React from "react";
import "./Support.css";
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

function Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supportInput, setSupportInput] = useState("");

  const handleChange = (event) => {
    setSupportInput(event.target.value);
  };

  const classes = useStyles();

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "SUPPORT_DATA",
      payload: supportInput,
    });
    history.push("/comments");
  };

  return (
    <main>
      <section>
        <h2>How well are you being supported?</h2>
        <form onSubmit={handleSubmit} className="add-support-form">
          <FormControl component="fieldset" required>
            <RadioGroup
              aria-label="support"
              name="support"
              value={supportInput}
              onChange={handleChange}
            >
              <FormControlLabel
                value="5"
                control={<Radio required={true} />}
                label="5: Awesome support"
              />
              <FormControlLabel
                value="4"
                control={<Radio required={true} />}
                label="4: Good support"
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="3: Some support"
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="2: Need more support"
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="1: No support at all"
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
          <p id="question">Question 3 of 4</p>
        </form>
      </section>
    </main>
  );
}

export default Support;
