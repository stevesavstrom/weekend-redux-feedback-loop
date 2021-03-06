import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import ThankYou from "../ThankYou/ThankYou";

function App() {

  return (
    <div className='App'>
  
      <header className='App-header'>
        <img src="images/logo2.png" width="300"></img>
        {/* <h1 className='App-title'>Daily Feedback</h1> */}
      </header>
    
      <Router>

      <Route path="/" exact>
      <Feeling />
      </Route>

      <Route path="/understanding" exact>
      <Understanding />
      </Route>


      <Route path="/support" exact>
      <Support />
      </Route>

      <Route path="/comments" exact>
      <Comments />
      </Route>

      <Route path="/review" exact>
      <Review />
      </Route>

      <Route path="/thankyou" exact>
      <ThankYou />
      </Route>

      </Router>
    </div>
  );
}

export default App;
