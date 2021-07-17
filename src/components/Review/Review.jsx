import "./Review.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Review() {
  const feedbackData = useSelector((store) => store.feedbackData);

const handleSubmit = () => {
	console.log(feedbackData);
  event.preventDefault();

  axios.post('/feedback', {
	feeling: feedbackData.feeling,
	understanding: feedbackData.understanding,
	support: feedbackData.support,
	comments: feedbackData.comments,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("this is a Post error on Review.jsx", err);
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
              <tr>
                <td>{feedbackData.feeling}</td>
                <td>{feedbackData.understanding}</td>
                <td>{feedbackData.support}</td>
				<td>{feedbackData.comments}</td>
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
};

export default Review;
