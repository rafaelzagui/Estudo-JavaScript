class Produto{
    constructor(nome,preco){
        this.nome=nome;
        this.preco=preco;
    }
}

Produto.prototype.desconto = function(valor){
    this.preco = this.preco - (this.preco * (valor/100));
};

    
const p1 = new Produto("camiseta",50);
const p2 = {
    none: 'Caneca',
    preco:15
}

Object.setPrototypeOf(p2,Produto.prototype)
p2.desconto(50)
console.log(p2)
const p3 = Object.create(Produto.prototype,{
    preco:{
        writable: true,
        configurable: true,
        enumerable:true,
        value:113
    },
    tamanho2:{
        writable: true,
        configurable: true,
        enumerable:true,
        value:42
    }
})
p3.desconto(10)
console.log(p3)
/*const objA = {
    chaveA: 'A',
}
const objB = {
    chaveB: 'B',
}
const objC= new Object();
objC.chaveC='C';

Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)
console.log(objA.chaveA)*/