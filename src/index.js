import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingData = (state = [], action) => {
  if (action.type === "FEELING_DATA") {
    return action.payload;
  }
  return state;
};

const understandingData = (state = [], action) => {
  if (action.type === "UNDERSTANDING_DATA") {
    return action.payload;
  }
  return state;
};

const supportData = (state = [], action) => {
	if (action.type === "SUPPORT_DATA") {
	  return action.payload;
	}
	return state;
  };

  const commentsData = (state = [], action) => {
	if (action.type === "COMMENTS_DATA") {
	  return action.payload;
	}
	return state;
  };

const storeInstance = createStore(
  combineReducers({
    //  Reducers go here
  feelingData,
	understandingData,
	supportData,
	commentsData
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
