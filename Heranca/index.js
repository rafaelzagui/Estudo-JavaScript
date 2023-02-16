//Produto
//Camiseta, caneca, lapis
function Produto(nome,preco)
{
    this.nome= nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valor){
    this.preco=this.preco + (this.preco *(valor/100));
}
Produto.prototype.desconto = function(valor){
    this.preco=this.preco -(this.preco *(valor/100));
}
function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
function Caneca(nome,preco,material,estoque)
{
    Produto.call(this,nome,preco)
    this.material=material;
    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set:function(valor)
        {
         if(typeof valor != 'number')return;
         estoque = valor;
        }

    })
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const c1= new Camiseta("Regata",50,"preta");
const caneca = new Caneca('Caneca',13,'plastico',5);
caneca.estoque = 50
console.log(c1);
console.log(caneca)
console.log(caneca.estoque)




