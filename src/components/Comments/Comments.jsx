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
import "./Comments.css";

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supportInput, setSupportInput] = useState('');
  const [commentsInput, setCommentsInput] = useState('');

//   const feedbackFormData = {
// 	feeling: feelingInput,
// 	understanding: understandingInput,
// 	support: supportInput,
// 	comments: commentsInput
//   };

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "COMMENTS_DATA",
      payload: commentsInput,
    });
    history.push("/review");
  };

  return (
    <section>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit} className="add-comments-form">

        <input
          required
          placeholder="Comments"
          value={commentsInput}
          onChange={(event) => setCommentsInput(event.target.value)}
        />

        <button type="submit">Next</button>
      </form>
    </section>
  );
}

export default Comments;