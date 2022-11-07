// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
const sobrenome ='Zagui';
function criaNome(nome){
    return `${nome} ${sobrenome}`
}

function falaNome(){
console.log(criaNome('Rafael'));
console.log(`Idade: ${idade}\nPeso: ${peso}\nAltura: ${altura}`)
}

falaNome()



})(20,95,195);
