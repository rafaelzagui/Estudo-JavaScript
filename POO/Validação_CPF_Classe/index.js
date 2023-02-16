// 705.484.450-52 070.987.720-03
class ValidaCPF{
    constructor(cpf)
    {
        Object.defineProperty(this,'cpfLimpo',{
            writable:false,
            enumerable:true,
            configurable:false,
            value :cpf.replace(/\D+/g,'')
        })
    }
    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos+digito1);
        this.novoCpf = cpfSemDigitos+digito1+digito2
    }

    geraDigito(cpfSemDigitos){
        let total =0;
        let reverso = cpfSemDigitos.length+1;
        for(let stringNumerica of cpfSemDigitos){
            total+=reverso*Number(stringNumerica);
            reverso--;
        }
        const digito = 11 -(total%11);
        return digito<=9 ? String(digito) : '0';
    }
    valida(){
        if(typeof this.cpfLimpo !== 'string')return false;
        if(this.cpfLimpo.length!== 11)return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
        return  this.novoCpf === this.cpfLimpo
    }
   

}

const cpfValido = new ValidaCPF('457.071.288-65');
if(!cpfValido.valida())console.log('CPF invalido');
else console.log('Cpf valido')
