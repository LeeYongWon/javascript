let firstNum = Math.floor(Math.random() * 9 + 1);
let secondNum = Math.floor(Math.random() * 9 + 1);
let multiplicationed = firstNum * secondNum;

const a = document.getElementById("qu");
let input = document.getElementById('input');
const btn = document.getElementById('btn');
let word = document.getElementById('word');

a.innerText = `${firstNum} 곱하기 ${secondNum} 은?`;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (Number(input.value) === multiplicationed) {
        firstNum = Math.floor(Math.random() * 9 + 1);
        secondNum = Math.floor(Math.random() * 9 + 1);
        multiplicationed = firstNum * secondNum;
        a.innerText = `${firstNum} 곱하기 ${secondNum} 은?`;
        input.value = '';
        word.innerText='정답입니다';
    } else {
        input.value = '';
        word.innerText='틀렸습니다.';
    }
})
