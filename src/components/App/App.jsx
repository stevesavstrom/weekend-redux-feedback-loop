import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Review from "../Review/Review";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

      <Route path="/" exact>
      <Feeling />
      </Route>

      <Route path="/understanding" exact>
      <Understanding />
      </Route>

      <Route path="/review" exact>
      <Review />
      </Route>

      </Router>
    </div>
  );
}

export default App;
