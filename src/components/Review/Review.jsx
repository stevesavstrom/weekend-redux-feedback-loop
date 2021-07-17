import "./Review.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Review() {
  const feelingData = useSelector((store) => store.feelingData);
  const understandingData = useSelector((store) => store.understandingData);
  const supportData = useSelector((store) => store.supportData);
  const commentsData = useSelector((store) => store.commentsData);

  const handleSubmit = () => {
    event.preventDefault();

    const feedbackPost = {
      feeling: feelingData,
      understanding: understandingData,
      support: supportData,
      comments: commentsData,
    };

    axios
      .post("/feedback", feedbackPost)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("this is a Post error on Review.jsx", err);
      });
  };
  return (
    <>
      <section>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{feelingData}</td>
              <td>{understandingData}</td>
              <td>{supportData}</td>
              <td>{commentsData}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <button type="submit" value="submit" onClick={() => handleSubmit()}>
          Submit Feedback
        </button>
      </section>
    </>
  );
}

export default Review;
