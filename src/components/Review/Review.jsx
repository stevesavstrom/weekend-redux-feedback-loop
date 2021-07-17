import "./Review.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Review() {
  const feedbackData = useSelector((store) => store.feedbackData);

const handleSubmit = () => {
  event.preventDefault();

  axios({
    method: "POST",
    url: "/feedback",
    data: {
      feeling: feedbackData.feelingInput,
      understanding: feedbackData.understandingInput,
      support: feedbackData.supportInput,
      comments: feedbackData.commentsInput,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("this is a Post error", err);
    });
}
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
            {feedbackData.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
				<td>{feedback.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
	  <section>
        {/* don't send to db until user clicks checkout */}
          <button type="submit" value="submit" onClick={() => handleSubmit()}>
            Submit Feedback
          </button>
      </section>
    </>
  );
};

export default Review;
