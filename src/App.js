import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from "./Home.js";
import About from "./About.js";
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>

      <Router>
    <div>
       <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
          <a href="/" class="brand-logo left">The Learning Hub</a>
     </ul>
         <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/home">My Skills</Link></li>
        <li><Link to="/about">My Work</Link></li>
        <li><Link to="/about">Collaborate</Link></li>
        </ul>
    </div>
  </nav>

      <hr/>

      <Route exact path="/home" component={Home}/>
      <Route path="/about" component={About}/>
 
    </div>
  </Router>

</MuiThemeProvider>
      </div>

    );
  }
}

export default App;
