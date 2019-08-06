
for (var star = 1; star <= 16; star *= 2) {
    console.log('*'.repeat(star));
}
console.log('-------------------------')


for (var star = 5; star >= 1; star -= 1) {
    console.log(' '.repeat(5 - star) + '*'.repeat(star));
}

console.log('------------------------------------------------------')
//별이 처음에 9개 그 밑에는 7개 그 밑에는 5개 역삼각형

for (var star = 9; star >= 1; star -= 2) {
    console.log(' '.repeat((9 -star)/2) + '*'.repeat(star));
}
console.log('----------------------------------------')

for(var star= 5; star>=1; star -=2){
    console.log(' '.repeat(Math.abs(star-2))+ '*'.repeat(star));
}

