import React from 'react';


const me1 = require('../images/me.jpg');
const me2 = require('../images/me2.jpg');

const instaLink = 'https://www.instagram.com/wmmboyce';

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = { me: me1 };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    const currImg = this.state.me === me1 ? me2 : me1;
    this.setState({ me: currImg });
  }

  render() {
    return (
      <a href={instaLink} target="_blank" rel="noopener noreferrer">
        <img
          id="me"
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseOver}
          src={this.state.me}
          alt=""
        />
      </a>
    );
  }
}

export default Me;
