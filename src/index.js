import React from 'react';
import {render} from 'react-dom';
// import StorePicker from './components/StorePicker';
// import App from './components/App';
import Router from './components/Router';
import "./css/style.css";



//  render(<StorePicker/>, document.querySelector('#main'));
// ReactDom.render(<App/>, document.querySelector('#main'));
// ReactDom.render(<Router/>, document.getElementById('#main'));
render(<Router/>, document.querySelector('#main'));
