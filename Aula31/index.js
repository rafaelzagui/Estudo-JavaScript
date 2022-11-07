//first class object (Objetos de primeira classe)  coloca as funções no topo de prioridade
//Function expresion
//Arrow function
const souUmDado = (num1,num2)=>{
    let resultado = num1+num2
    return resultado
};
function executaFuncao(funcao){
let num1=1
let num2 =2
console.log(funcao(num1,num2));
}
executaFuncao(souUmDado)