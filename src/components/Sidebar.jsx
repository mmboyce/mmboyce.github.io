import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default (props) => (
  <Menu {...props}>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#interests">Interests</a>
  </Menu>
);
