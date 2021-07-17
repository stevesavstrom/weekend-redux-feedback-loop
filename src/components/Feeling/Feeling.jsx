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

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feelingInput, setFeelingInput] = useState('');

//   const feedbackFormData = {
// 	feeling: feelingInput,
// 	understanding: understandingInput,
// 	support: supportInput,
// 	comments: commentsInput
//   };

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
	
        <input
          required
          placeholder="Feeling"
          value={feelingInput}
          onChange={(event) => setFeelingInput(event.target.value)}
        />

        <button type="submit">Next</button>
      </form>
    </section>
  );
}

export default Feeling;
