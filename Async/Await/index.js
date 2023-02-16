const rand = (min = 0,max= 3)=>{
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max - min)+ min)
}

const esperaAi = (msg,tempo) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg!=='string'){
                reject('Cai no erro');
                return;
            }
            resolve(msg.toUpperCase()+' - Passei na Promise');
            return
        },tempo)
    });
};

/*esperaAi('Frase 1', rand(0,3)).then(valor=>{
    console.log(valor)
    return esperaAi('Frase 2', rand());
}).then(valor =>{
    console.log(valor);
    return esperaAi('Frase 3', rand());
}).then(valor=>{
    console.log(valor)
}).catch(e=>{
    console.log(e)
})*/
async function executa(){
try{
    const fase1= await esperaAi('Frase 1', rand(0,3));
    console.log(fase1)
    const fase2= await esperaAi('Frase 2', rand(0,3));
    console.log(fase2)
    const fase3= await esperaAi('Frase 3', rand(0,3));
    console.log(fase3)
}
catch(e){
    console.log(e);
}
}
executa()