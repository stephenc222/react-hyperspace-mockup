import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomePage from './HomePage/HomePage'
import GenericPage from './GenericPage/GenericPage'
import ElementsPage from './ElementsPage/ElementsPage'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/generic' component={GenericPage} />
      <Route exact path='/elements' component={ElementsPage} />
      <Route exact path='/' component={HomePage} />
    </Router>
  );
}

export default App;
