import { useState } from "react";
import { useDispatch } from "react-redux";

import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./Feeling.css";

const useStyles = makeStyles({
  root: {
    width: '30px'
  },
});

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feelingInput, setFeelingInput] = useState('');

  const classes = useStyles();

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "FEELING_DATA",
      payload: feelingInput
    });
    history.push("/understanding");
  };

  return (
    <section>   
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit} className="add-feeling-form">
	
        <TextField id="outlined-basic" label="Feeling" variant="outlined"
          required
          value={feelingInput}
          onChange={(event) => setFeelingInput(event.target.value)}
        />
      <Box m="20px">
        <Button className={classes.root} variant="outlined" color="primary" type="submit">Next</Button>
        </Box>
      </form>
    </section>
  );
}

export default Feeling;
