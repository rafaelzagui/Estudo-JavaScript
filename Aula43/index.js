const numeros = [5,50,90,10,2,10,32];
const total =numeros.reduce((acumulador,valor)=>{
    if(valor % 2 === 0)acumulador+=valor;
    return acumulador

},0);
console.log(total)