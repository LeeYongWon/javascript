const React = require('react');
const ReactDom=require('react-dom');
const { Component} =React;

class WordRelay extends Component{
    state={
        value:'ㅎㅇㅎㅎㅇㅎㅇㅎ'
    }
    render(){
        return(
            <React.Fragment>
                <div>{this.state.value}</div>
            </React.Fragment>
        );
    }
}

module.exports = WordRelay;