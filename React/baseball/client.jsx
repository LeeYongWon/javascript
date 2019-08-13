const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');
import Baseball from './Baseball';
const Hot = hot(Baseball);

ReactDom.render(<Hot />, document.getElementById('root'));