import ReactDOM from 'react-dom';
import KNN from'./Classification/KNN';
import LR from'./Classification/LR';

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
  renderKNN() { 
   ReactDOM.render(<KNN />, document.getElementById('content'));
   this.setState({open: false});
  },
renderLR() { 
   ReactDOM.render(<LR />, document.getElementById('content'));
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

          <MenuItem onClick={this.renderKNN} >K-Nearest Neighbours</MenuItem>
          <MenuItem onClick={this.renderLR} >Logistic Regression Classification</MenuItem>
                    


        </Drawer>
<div id="content">About</div>
      </div>
    );
  }
})

export default Home ;