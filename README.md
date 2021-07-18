# Weekend Challenge: Feedback Loop

## Description
Multi-step feedback/reflection form that allows users to provide numerical and text feedback. This project utilizes React, Redux, Node.js, Express, PostgreSQL, Material-UI, HTML, and CSS. This project implements server and client side functionality to create, read, and update items on the server, client, and database. This project was created by [Steve Savstrom](https://www.linkedin.com/in/stevesavstrom/) during Week 11 of the [Full Stack Software Engineering program](https://www.primeacademy.io/courses/engineering#curriculum) at [Prime Digital Academy](https://www.primeacademy.io/).

- Users can provide numerical feedback in 3 categories (Feeling, Understanding, Support) and can also write additional comments.
- Users navigate to each feedback category by clicking the "Next" button.
- Feedback data is stored across views using Redux.
- Users can review their feedback on one page before submitting.
- After submitting, users will see a "thank you" message and button to start over.
- Feedback data is captured in database.
- Clean, logical user interface utilizing Material-UI components and styling.

## Screen Shot
![Screen Shot](/public/images/screenshot.gif)

## Technologies Used and Prerequisites
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)
- [Material-UI](https://material-ui.com/)

## Installation
1. Create a SQL database named `prime_feedback` (see database.sql for setup instructions.)
2. Open your text editor and run `npm install`, `npm install redux react-redux`, `npm install redux-logger`, and  `npm install react-router-dom` in Terminal.
3. Run `npm run server` in Terminal.
4. Run `npm run client` in another Terminal to view React application.

## Usage
Provide daily feedback for a learning experience by rating different categories and providing written comments. Your feedback is important and will be kep safe in the database. Modeled after Prime Digital Academy's daily feedback form.

## Project Requirements
- [x] Front end experience that allows users to leave feedback.
- [x] Feedback collected over 4 views.
- [x] Separate review page displays current feedback values and a submit button.
- [x] When all steps are complete, feedback will be saved in database.
- [x] Each part of form is it's own route - buttons navigate to next step
- [x] Validation required for numerical inputs, no validation needed for comments (can be blank).
- [x] Review page allows user to review their feedback before submitting (cannot edit feedback or go back.)
- [x] Review step has a submit button which will send data to database.
- [x] Submit button triggers `axios` to send (`POST`) data to database.
- [x] Users can then click the button to take a new survey which needs to reset all data and go back to the first step.

## Stretch Goals

## TO DO
- [x] npm install
- [x] npm run server
- [x] npm run client
- [x] npm install redux react-redux
- [x] npm install redux-logger
- [x] npm install react-router-dom
- [x] setup database 'prime_feedback'
- [x] CREATE TABLE "feedback" in database
- [x] INSERT INTO feedback - placeholder data
- [x] setup component folders and files for feeling, understanding, support, comments, review, and admin.
- [x] setup feedback.router.js with GET and POST express routes
- [x] setup server.js with express routes and router const
- [x] setup Review component form and axios POST
- [x] setup ThankYou component
- [x] add client-side routing to App.jsx and all components
- [x] Review text for each component
- [x] style header/overall look/colors
- [x] style components with material-ui (inputs, buttons, etc.)
- [] clean up code and formatting - remove unnecessary imports, etc.
- [] complete READM for submission with description, functionality, process, screenshot, etc.
- [] Final functionality test before submitting (UX, routing, DB, etc.)
