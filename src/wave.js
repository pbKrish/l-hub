import ReactDOM from 'react-dom';
import React from 'react';
import "./wave/js/classie.js"
import "./wave/js/main3.js";
import "./wave/css/normalize.css";
import "./wave/css/demo.css";
import "./wave/css/menu_wave.css";
import "./wave/js/snap.svg-min.js";

import RaisedButton from 'material-ui/RaisedButton';

var createReactClass = require('create-react-class');

const Wave = createReactClass({
getInitialState(){
        return {
            open: false
        }
    },


 handleToggle() { this.setState({open: !this.state.open});},

  handleClose() {this.setState({open: false});},

 render() {
    return (
      <div>
	<button class="close-button" id="close-button">Close Menu</button>
	<div class="morph-shape" id="morph-shape" data-morph-open="M0,100h1000V0c0,0-136.938,0-224,0C583,0,610.924,0,498,0C387,0,395,0,249,0C118,0,0,0,0,0V100z">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path d="M0,100h1000l0,0c0,0-136.938,0-224,0c-193,0-170.235-1.256-278-35C399,34,395,0,249,0C118,0,0,100,0,100L0,100z"/></svg>
	<button class="menu-button" id="open-button">Open Menu</button>   
   </div>
</div>
    );
  }
})

export default Wave ;
