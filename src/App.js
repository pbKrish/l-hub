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
      <Router>
      <MuiThemeProvider>

        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      
      <div className="navbar-toggle mobnav" >

    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
      <MenuItem eventKey="1"><Link to="/l-hub/home"><a style={{color: "black"}}>Regression</a></Link></MenuItem>
      <MenuItem eventKey="2"><Link to="/l-hub/about"><a style={{color: "black"}}>Classification</a></Link></MenuItem>
    </DropdownButton>
</div>
      <a className="navbar-brand" href="/l-hub">Learn A.I</a>
 
    </div>
     <div id="menu"></div>

    <div className="collapse navbar-collapse" id="main-menu">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/l-hub/home">Regression</Link></li>
       <li><Link to="/l-hub/about">Classification</Link></li>
       <li><Link to="/l-hub/about">Clustering</Link></li>
       <li><Link to="/l-hub/about">Neural Networks</Link></li>
       <li><Link to="/l-hub/about">Reinforcemnet Learning</Link></li>
       <li><Link to="/l-hub/about">Bonus</Link></li>
      </ul>
    </div>
  </div>
</nav>




      <Route exact path="/l-hub/home" component={Home}/>
      <Route path="/l-hub/about" component={About}/>      
</MuiThemeProvider>

</Router>



</div>

    );
  }
})

export default App;
