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
import "./Support.css";

const useStyles = makeStyles({
  button: {
    width: "250px",
    padding: "10px",
  },
  input: {
    width: "300px",
    margin: "3px",
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
    <section>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit} className="add-support-form">
        <FormControl component="fieldset" required>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={supportInput}
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

export default Support;
