import ReactDOM from 'react-dom';
import SLR from'./Regression/SLR';
import MLR from'./Regression/MLR';
import PR from'./Regression/PR';
import SVM from'./Regression/SVM';
import DT from'./Regression/DT';
import RF from'./Regression/RF';

import React from 'react';

import './Home.css'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
var createReactClass = require('create-react-class');

const Home = createReactClass({
getInitialState(){
        return {
            open: false
        }
    },


 handleToggle() { this.setState({open: !this.state.open});},

  handleClose() {this.setState({open: false});},
  renderSLR() { 
   ReactDOM.render(<SLR />, document.getElementById('content'));
   this.setState({open: false});
  },
renderMLR() { 
   ReactDOM.render(<MLR />, document.getElementById('content'));
   this.setState({open: false});
  },
renderPR() { 
   ReactDOM.render(<PR />, document.getElementById('content'));
   this.setState({open: false});
  },
renderSVM() { 
   ReactDOM.render(<SVM />, document.getElementById('content'));
   this.setState({open: false});
  },
renderDT() { 
   ReactDOM.render(<DT />, document.getElementById('content'));
   this.setState({open: false});
  },
  renderRF() { 
   ReactDOM.render(<RF />, document.getElementById('content'));
   this.setState({open: false});
  },

 render() {
    return (
      <div>

        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={270}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <MenuItem onClick={this.renderSLR} >Simple Linear Regreesion</MenuItem>
          <MenuItem onClick={this.renderMLR} >Multiple Linear Regreesion</MenuItem>
          <MenuItem onClick={this.renderPR} >Polynomial Regreesion</MenuItem>
          <MenuItem onClick={this.renderSVM} >Support Vector Regreesion</MenuItem>
          <MenuItem onClick={this.renderDT} >Decission Tree Regreesion</MenuItem>
          <MenuItem onClick={this.renderRF} >Random Forest Regreesion</MenuItem>
                    


        </Drawer>
<div id="content">About</div>
      </div>
    );
  }
})

export default Home ;