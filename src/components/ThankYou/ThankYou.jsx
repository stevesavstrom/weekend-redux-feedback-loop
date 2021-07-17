import axios from "axios";
import { useDispatch } from "react-redux";

import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <section>
      <h2>Thank you!</h2>
      <form onSubmit={handleSubmit} className="thank-you-form">

        <button type="submit">Start Over</button>
      </form>
    </section>
  );
}

export default ThankYou;