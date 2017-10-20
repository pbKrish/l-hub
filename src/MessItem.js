import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
var createReactClass = require('create-react-class');
const MessItem = createReactClass({
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

          <MenuItem href="/l-hub/messitem" >Menu Item</MenuItem>
          <MenuItem href="/l-hub/messitem">Menu Item 2</MenuItem>
        </Drawer>
<h4>Message Item Component is here!!</h4>
      </div>
    );
  }
})

export default MessItem ;