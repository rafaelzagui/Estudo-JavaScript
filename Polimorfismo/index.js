function Conta(agc,conta, saldo)
{
    this.agencia = agc;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor> this.saldo || typeof valor !='number'){ 
        console.log(`Saldo insuficiente: ${this.saldo}`)
        this.verSaldo();     
        return
    } 
    this.saldo-=valor
};
Conta.prototype.depositar = function(valor){
if(typeof valor !='number') return;
this.saldo+=valor
this.verSaldo();
};
Conta.prototype.verSaldo = function(){
   console.log( `Saldo: R$${this.saldo} / Agencia: ${this.agencia} / Conta: ${this.conta} `)
};

function ContaCorrente(agc,conta,saldo,limite){
    Conta.call(this, agc,conta,saldo)
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor){
if(valor>(this.saldo+this.limite)){
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return
}
this.saldo -=valor;
this.verSaldo()
};

function CP(agc, conta, saldo){
Conta.call(this,agc,conta,saldo)
}
CP.prototype =Object.create(Conta.prototype);
CP.prototype.constructor=CP;

const cc  = new ContaCorrente(11,22,0,100)
cc.depositar(10)
cc.sacar(90)

const cp = new CP(12,33,0);
cp.depositar(15);
cp.sacar(110)