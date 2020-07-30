import React from 'react';
import {Link, NavLink,  Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import Appbar from './Appbar';
import Details from './Details';

function App() {
  //const match = props.match
 
  return (
    <div>
    
       
        <p>
         <Appbar></Appbar>
         <Router>
          <Route exact path="/longrich/:id" component={Details} />
         </Router>
        </p>
        
    </div>
  );
}

export default App;
