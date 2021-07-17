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
import "./Support.css";

function Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supportInput, setSupportInput] = useState('');

//   const feedbackFormData = {
// 	feeling: feelingInput,
// 	understanding: understandingInput,
// 	support: supportInput,
// 	comments: commentsInput
//   };

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

        <input
          required
          placeholder="Support"
          value={supportInput}
          onChange={(event) => setSupportInput(event.target.value)}
        />

        <button type="submit">Next</button>
      </form>
    </section>
  );
}

export default Support;