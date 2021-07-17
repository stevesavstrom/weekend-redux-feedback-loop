import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./Understanding.css";

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understandingInput, setUnderstandingInput] = useState('');

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "UNDERSTANDING_DATA",
      payload: understandingInput,
    });
    history.push("/support");
  };

  return (
    <section>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit} className="add-book-form">

        <input
          required
          placeholder="Understanding"
          value={understandingInput}
          onChange={(event) => setUnderstandingInput(event.target.value)}
        />

        <button type="submit">Next</button>
      </form>
    </section>
  );
}

export default Understanding;