//closures facilidade que a funcao tem em acessar seu escopo lexico
function retornaFuncao(){
    const nome= 'Luiz';
    return function(){// tres escopos interna, função maee na global
        return nome;
    }
}
const funcao = retornaFuncao();
console.log(funcao())