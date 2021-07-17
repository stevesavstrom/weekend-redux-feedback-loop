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
  const [feelingInput, setFeelingInput] = useState('');
  const [understandingInput, setUnderstandingInput] = useState('');
  const [supportInput, setSupportInput] = useState('');
  const [commentsInput, setCommentsInput] = useState('');

  const feedbackFormData = {
	feeling: feelingInput,
	understanding: understandingInput,
	support: supportInput,
	comments: commentsInput
  };

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "FEEDBACK_DATA",
      payload: feedbackFormData,
    });
    history.push("/review");
  };

  return (
    <section>
      <h2>Add Feedback</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        {/* <input
          required
          placeholder="Feeling"
          value={feelingInput}
          onChange={(event) => setFeelingInput(event.target.value)}
        /> */}

        <input
          required
          placeholder="Understanding"
          value={understandingInput}
          onChange={(event) => setUnderstandingInput(event.target.value)}
        />

        {/* <input
          required
          placeholder="Support"
          value={supportInput}
          onChange={(event) => setSupportInput(event.target.value)}
        /> */}

        {/* <input
          required
          placeholder="Comments"
          value={commentsInput}
          onChange={(event) => setCommentsInput(event.target.value)}
        /> */}

        <button type="submit">Submit Feedback</button>
      </form>
    </section>
  );
}

export default Understanding;