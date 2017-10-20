import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
var createReactClass = require('create-react-class');
const SVM = createReactClass({
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

          <MenuItem href="/l-hub/slr" >Simple Linear Regreesion</MenuItem>
          <MenuItem href="/l-hub/mlr" >Multiple Linear Regreesion</MenuItem>
          <MenuItem href="/l-hub/polynomial" >Polynomial Regreesion</MenuItem>
          <MenuItem href="/l-hub/svm" >Support Vector Regreesion</MenuItem>
          <MenuItem href="/l-hub/dt" >Decission Tree Regreesion</MenuItem>
          <MenuItem href="/l-hub/rf" >Random Forest Regreesion</MenuItem>
                    


        </Drawer>
<h3>Support Vector Regression</h3>
      </div>
    );
  }
})

export default SVM ;