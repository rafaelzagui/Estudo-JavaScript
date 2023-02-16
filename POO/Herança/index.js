class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar()
    {
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        console.log('Ligando o dispositivo');
        this.ligado = true;
        setTimeout(()=>{
            console.log(`${this.nome} ligado`)
        },2000)
        
    }

    desligar()
    {
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Iphone 8');
d1.ligar();

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor=cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Iphone 12');
console.log(s1)