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
import {Dropdown} from 'react-materialize/lib/Dropdown';
import Button from 'react-materialize/lib/Button';
import NavItem from 'react-materialize/lib/NavItem';
import {ButtonGroup, DropdownButton , MenuItem} from 'react-bootstrap/lib';
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
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      
      <div className="navbar-toggle " >

    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
      <MenuItem eventKey="1" href="/l-hub/home">Regression</MenuItem>
      <MenuItem eventKey="2" href="/l-hub/about">Classification</MenuItem>
    </DropdownButton>
</div>
      <a className="navbar-brand" href="/l-hub">Learn A.I</a>
 
    </div>
     <div id="menu"></div>

    <div className="collapse navbar-collapse" id="main-menu">
      <ul className="nav navbar-nav navbar-right">
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
