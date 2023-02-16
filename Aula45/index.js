class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco=preco;
        Object.defineProperty(this,'estoque',{
            enumerable: true,
            configurable:true,
            get:()=>{return estoque},
            set:value=>{
                if(typeof value !='number') console.log("erro")
                this.estoque = value;
            }
        })
    }
}
const p1= new Produto('camiseta',20,3);
console.log(p1.estoque);