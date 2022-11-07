const verificaNum = (num) => {
    if (typeof num ==="number") {
        (num % 5 === 0 && num%3 ===0) ? num = 'FizzBuzz' : '';
        (num % 3 == 0) ? num = 'Fizz' : '';
        (num % 5 == 0) ? num = 'Buzz' : '';
        
    } else { console.log(typeof num + 'Não é um numero') }
    return num
}
for(let i  =1; i<=100;i++){
    console.log(i+' : '+ verificaNum(i))
}


