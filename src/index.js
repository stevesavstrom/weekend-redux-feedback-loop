import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";





const feedbackData = (state = [], action) => {
	if (action.type === 'FEEDBACK_DATA') {
	  return action.payload;
	}
	return state;
  };

const storeInstance = createStore(
	combineReducers({
	  //  Reducers go here
	  feedbackData
	}),
	applyMiddleware(logger)
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
