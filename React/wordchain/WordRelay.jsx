const React = require('react');
const ReactDom = require('react-dom');
const { Component, useState, useRef } = React;

const WordRelay = () => {
    /*
        제시단어의 끝글자와 입력단어의 첫번째 글자가 같다면
        입력단어가 제시단어로 return
        제시단어의 끝글자를 구하는 방법은
        firstWord[firstWord.length-1]
    */
    const [firstWord, setFirstWord] = useState('이용원');
    const [value,setValue ] =useState('');
    const [result, setResult] = useState('');

    const onChange = (e) =>{
        setValue(e.target.value);
    }

    const onClick =(e)=>{
        e.preventDefault();
        if(firstWord[firstWord.length-1]===value[0]){
            setFirstWord(value);
            setValue('');
            setResult('정답입니다');
        }else{
            setValue('');
            setResult('틀렸습니다');
        }
    }
    return <>
            <h1>제시어 : {firstWord}</h1>
        <form>
            <input type="text" value={value} onChange={onChange}></input>
            <button onClick={onClick}>버튼</button>
            <h1>{result}</h1>
        </form>
    </>
}

module.exports = WordRelay;