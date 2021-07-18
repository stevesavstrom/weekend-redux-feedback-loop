import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
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
        <h1 className='App-title'>Daily Feedback</h1>
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
