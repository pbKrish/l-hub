import ReactDOM from 'react-dom';

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
import DropDownMenu from 'material-ui/DropDownMenu';
import MainMenu from './MainMenu.js';
const styles = {
  customWidth: {
    width: 175,
  },
};


var createReactClass = require('create-react-class');

const App = createReactClass({
getInitialState(){
        return {
            open: false,
        }
    },


  
renderMenu(){
if(!this.state.open){
     ReactDOM.render(<MainMenu />, document.getElementById('menu'));
   this.setState({open: true});}
else{
     ReactDOM.render(<div></div>, document.getElementById('menu'));
   this.setState({open: false});}

},

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
    
      <button onClick={this.renderMenu} type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/l-hub">Learn A.I</a>
 
    </div>
     <div id="menu"></div>

    <div class="collapse navbar-collapse" id="main-menu">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/l-hub/home">Regression</a></li>
       <li><a href="/l-hub/about">Classification</a></li>
       <li><a href="/l-hub/about">Clustering</a></li>
       <li><a href="/l-hub/about">Neural Networks</a></li>
       <li><a href="/l-hub/about">Reinforcemnet Learning</a></li>
       <li><a href="/l-hub/about">Bonus</a></li>
      </ul>
    </div>
  </div>
</nav>



      <MuiThemeProvider>

      <Router>
<div>
    <div>

      <Route exact path="/l-hub/home" component={Home}/>
      <Route path="/l-hub/about" component={About}/>      
</div>
</div>
</Router>
</MuiThemeProvider>
      </div>

    );
  }
})

export default App;
