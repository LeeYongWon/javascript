


// if(word[word.length-1] === answer[0]){
//     answer=word
//     console.log('맞았습니다');
// }else{
//     console.log();
// }

for(let word='이용원'; true;  ){
    let answer = prompt(word);
    if(word[word.length-1] === answer[0]){
        word=answer;
        alert('정답입니다');
    }else{
        alert('틀렸습니다.')
    }
}