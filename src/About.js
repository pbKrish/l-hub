import React from 'react';
var createReactClass = require('create-react-class');
const About = createReactClass({
getInitialState(){
        return {
            numClicks: 0
        }
    },
    click() {
        this.setState({
        	numClicks: this.state.numClicks + 1
        });
    console.log(this.state.numClicks)
    },


render(){
	return (
<div><h2>About</h2>

<button onClick={this.click}>Open Menu</button>
{this.state.numClicks}
</div>
);
}
})

export default About ;