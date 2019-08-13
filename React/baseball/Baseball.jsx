import React, { Component } from 'react';

const getNumbers = () => {//숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
    const a = Math.floor(Math.random() * 9 + 1)
    const b = [];
    b.push(a);
}

const onSubmitForm = (e) => {
    e.preventDefault();

}

const onChange = (e) => {

}

const a = [
    { fruit: '사과', taste: '맛있디' },
    { fruit: '바나나', taste: '맛있디' },
    { fruit: '포도', taste: '맛있디' },
    { fruit: '귤', taste: '맛없다' },
    { fruit: '배', taste: '맛있디' },];
class Baseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }
    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" maxLength={4} /*value={this.state.value} onChange={this.onChange}*/ />
                    <button>버튼</button>
                </form>
                <h1>시도: {this.state.tries.length}</h1>
                <Listlist />
            </>
        );
    }
}
class Listlist extends Component{
    render(){
        return(
            <>
                <ul>
                {a.map((value, i) => {
                        return <li key={i}>{value.fruit} - {value.taste}</li>
                    })}
                </ul>
            </>
        );
    }
}
export default Baseball;