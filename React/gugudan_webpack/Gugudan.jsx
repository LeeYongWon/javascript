const React = require('react');
const { useState } = React;

const Gugudan = () => {
    const [first, setFirst] = useState(Math.floor(Math.random() * 9 + 1));
    const [second, setSecond] = useState(Math.floor(Math.random() * 9 + 1));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const useRef = React.useRef(null);
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        if (Number(value) === first * second) {
            setValue('');
            setResult('정답입니다');
            setFirst(Math.floor(Math.random() * 9 + 1));
            setSecond(Math.floor(Math.random() * 9 + 1));
            useRef.current.focus();
        } else {
            setValue('');
            setResult('틀렸습니다.');
            useRef.current.focus();
        }
    }
    return <React.Fragment>
        <h1>{first} 곱하기 {second} 는?</h1>
        <form>
            <input ref={useRef} value={value} onChange={onChange}></input>
            <button onClick={onClick}>버튼</button>
        </form>
        <h1>{result}</h1>
    </React.Fragment>
}

module.exports = Gugudan;

