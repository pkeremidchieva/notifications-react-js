/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  eventhough those 2 dependencies are only used in development
  eslint has no way to tell that and outputs an error
*/

// react dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './style.scss';

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
