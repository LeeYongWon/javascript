const React = require('react');
const ReactDom=require('react-dom');
const Baseball = require('./Baseball');
const {hot} =require('react-hot-loader/root');
const Hot = hot(Baseball);
ReactDom.render(<Hot />, document.getElementById('root'));
