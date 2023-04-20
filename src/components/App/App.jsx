import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import StepFour from '../Steps/StepFour';

function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path="/">
            <Header />
        </Route>
        <Route exact path="/step-one">
            <StepOne />
        </Route>
        <Route exact path="/step-two">
          <StepTwo />
        </Route>
        <Route exact path="/step-three">
          <StepThree />
        </Route>
        <Route exact path="step-four">
          <StepFour />
        </Route>
      </Router>
    </div>
  );
}

export default App;
