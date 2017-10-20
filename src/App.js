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
import SLR from "./Regression/SLR.js";
import MLR from "./Regression/MLR.js";
import Polynomial from "./Regression/Polynomial.js";
import SVM from "./Regression/SVM.js";
import DT from "./Regression/DT.js";
import RF from "./Regression/RF.js";


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
          <a href="/l-hub/" class="brand-logo left">Deep Learning</a>
     </ul>
         <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/l-hub/home">Regression</Link></li>
        <li><Link to="/l-hub/about">Classification</Link></li>
        <li><Link to="/l-hub/about">Clustering</Link></li>
        <li><Link to="/l-hub/about">Neural Networks</Link></li>
        <li><Link to="/l-hub/about">Reinforcement Learning</Link></li>
        <li><Link to="/l-hub/about">Bonus</Link></li>
        </ul>
    </div>
  </nav>

      <Route exact path="/l-hub/home" component={Home}/>
      <Route path="/l-hub/about" component={About}/>
        <Route  path="/l-hub/slr" component={SLR}/>
        <Route  path="/l-hub/mlr" component={MLR}/>
        <Route  path="/l-hub/polynomial" component={Polynomial}/>
        <Route  path="/l-hub/svm" component={SVM}/>
        <Route  path="/l-hub/dt" component={DT}/>
        <Route  path="/l-hub/rf" component={RF}/>
        
 
    </div>
  </Router>

</MuiThemeProvider>
      </div>

    );
  }
}

export default App;
