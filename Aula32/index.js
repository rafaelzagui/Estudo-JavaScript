function funcao(a,b=2,c=4)// caso nao passado o parametro ele assume os valores padroes que esta informado
{
console.log(a+b+c);
}
funcao(2,undefined,20)// caso nao queira passar o alguem aprametro e precise que assuma valor padrao, tem que utilizar o undefined