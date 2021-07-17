import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from "../Feeling/Feeling";
import Review from "../Review/Review";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
      <Review />
    </div>
  );
}

export default App;
