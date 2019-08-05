const firstNumber=Math.floor(Math.random()*9+1);
const backNumber=Math.floor(Math.random()*8+2);
// const number=Number(prompt(`${backNumber}X${firstNumber}=?`));
const number2=parseInt(prompt(`${backNumber}X${firstNumber}=?`)) 


if(backNumber*firstNumber===number2){
    console.log('정답')
}else{
    console.log('땡')
}