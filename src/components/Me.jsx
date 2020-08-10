import React from 'react';


const me1 = require('../images/me.jpg');
const me2 = require('../images/me2.jpg');

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = { me: me1 };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleMouseOver() {
    const { me } = this.state;
    const currImg = me === me1 ? me2 : me1;
    this.setState({ me: currImg });
  }

  handleFocus() {
    this.setState({
      me: me2,
    });
  }

  render() {
    const { me } = this.state;

    return (
      <img
        id="me"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseOver}
        onFocus={this.handleFocus}
        src={me}
        alt="my face"
      />
    );
  }
}

export default Me;
