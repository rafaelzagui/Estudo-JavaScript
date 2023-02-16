class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //metodo instância
    aumentarVolume(){
        this.volume +=2;
    }
    diminuirVolume(){
        this.volume-=2;
    }
    //metodo estático
    static trocaPilha(){
        console.log('Ok,')
    }
} 

const controle1 = new ControleRemoto('LG')
