const privateVelocidade = Symbol('Velocidade Private')
class Carro{
    constructor(nome){
        this.nome = nome;
        this[privateVelocidade] = 0;
    }
    get velocidade(){
        return this[privateVelocidade]
    }
    set velocidade(velocidade){
        if(velocidade>=150 || velocidade<=0||typeof velocidade !== 'number')return;
        this[privateVelocidade] = velocidade;

    }
    acelerar(){
        if(this[privateVelocidade]>=110)return;
           this[privateVelocidade]++;
    }
    freiar(){
        if(this[privateVelocidade]<=0) return;
           this[privateVelocidade]--;
    }
}
const c1 = new Carro('Fusca');

for(let i = 0; i<=200; i++)
{
    c1.acelerar();
   
}
c1.velocidade = '151'
console.log(c1.velocidade)