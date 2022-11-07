
//Factory function (Função Fabrica)
function criaPessoa(nome,sobrenome, idade,anoNasc)
{
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${nome} falou ${assunto}`;
        },
         verificaIdade(){
            return (this.idade != 2022 - this.anoNasc )?"Idade  não confere":"Idades conferem"
        },
        idade:idade,
        anoNasc:anoNasc

    }
}

const p1 = criaPessoa('Rafael','Zagui',20,2003)
console.log(p1.verificaIdade())