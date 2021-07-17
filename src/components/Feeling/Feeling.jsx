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
import "./Feeling.css";

const feedbackFormData = {
  feelingInput,
  understandingInput,
  supportInput,
  commentsInput,
};

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feelingInput, setFeelingInput] = useState(0);
  const [understandingInput, setUnderstandingInput] = useState(0);
  const [supportInput, setSupportInput] = useState(0);
  const [commentsInput, setCommentsInput] = useState("");

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "FEEDBACK_DATA",
      payload: feedbackFormData,
    });
    history.push("/understanding");
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          required
          placeholder="Feeling"
          value={feelingInput}
          onChange={(event) => setFeelingInput(event.target.value)}
        />

        <input
          required
          placeholder="Understanding"
          value={understandingInput}
          onChange={(event) => setUnderstandingInput(event.target.value)}
        />

        <input
          required
          placeholder="Support"
          value={supportInput}
          onChange={(event) => setSupportInput(event.target.value)}
        />

        <input
          required
          placeholder="Comments"
          value={commentsInput}
          onChange={(event) => setCommentsInput(event.target.value)}
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </section>
  );
}

export default Feeling;
