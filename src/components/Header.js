import React from 'react';

import config from '../../config';
const pic = require('../assets/images/logo.png');
const pic2x = require('../assets/images/logo@2x.png');

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <img height="128px" src={pic} srcSet={pic2x} alt="" />
      </span>
      <h1>Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed
diam nonumy eirmod tempor.</h1>
    </header>
  );
}
