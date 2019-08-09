const React = require('react');
const ReactDom = require('react-dom');

class Gugudan extends React.Component {
    state = {
        first: Math.floor(Math.random() * 9 + 1),
        second: Math.floor(Math.random() * 9 + 1),
        value: '',
        result: '',
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.state.first} 곱하기 {this.state.second} 는 ?</h1>
                    <form>
                        <input type="number" value={this.state.value} onChange={(e) => {
                            this.setState({
                                value: e.target.value
                            })
                        }} />

                        <button onClick={(e) => {
                            e.preventDefault();
                            if (Number(this.state.value) === this.state.first * this.state.second) {
                                this.setState({
                                    value: '',
                                    result: '정답입니다',
                                    first: Math.floor(Math.random() * 9 + 1),
                                    second: Math.floor(Math.random() * 9 + 1),

                                })
                            } else {
                                this.setState({
                                    value: '',
                                    result: '틀렸습니다',
                                })
                            }
                        }}>버튼</button>
                    </form>
                    <h1>{this.state.result}</h1>
                </div>
            </React.Fragment>
        );
    }
}
module.exports = Gugudan;

