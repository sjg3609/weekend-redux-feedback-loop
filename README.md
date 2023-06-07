# Weekend Redux Feedback Loop

## Description

In the Redux Feedback Loop the user will be able to take a survey of how they feel at various points in time. Each page has a new form for the user to fill out and then at the very end of all the steps, it will have them review what they have entered and then submit the feedback to a database where it keeps track of all user submitted data. Addtionally there is the ability to go back to previous forms and update if needed and 

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- Postgres SQL

## Installation

1. Create a database named `feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Upon opening the application it will ask you to submit a new feedback, clicking that will bring the user to the start of the survey
2. Users will then fill out one form, and click a button to bring them to the next step with a status tracker at the top telling them which point they are at
3. Fill out all forms and answer the questions, and then the application will bring them to a review page
4. Review all data entered, and if the user wants to make an edit, they are able to go back and do so
5. After submitting the data, it will push it to the database and have a date associated with it so they can go back and review all inputted survey questions at a later date (In development)


## Built With

- Axios
- React.js
- React Router
- Redux
- Material UI
