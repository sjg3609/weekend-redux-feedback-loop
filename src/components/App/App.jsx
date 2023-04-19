import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import StepOne from '../Steps/StepOne';

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
      </Router>
    </div>
  );
}

export default App;
