function numeroAleatorio(min, max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg, tempo)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(msg);
        },tempo)
    });
}

/*esperaAi('Frase 1', numeroAleatorio(1,3))
.then(resposta =>{
console.log(resposta)
return esperaAi('Frase 2', numeroAleatorio(1,3));
}).then(reposta=>{
    console.log(reposta)
}).catch()
*/

//Promise.all Promise.race Promise.resolve Promise.reject
//const promises = ['primeiro valor', esperaAi('Promise 1', 3000), esperaAi('Promise 2', 500), esperaAi('Promise 3', 200,), 'Outro valor'];

//Promise.all que recebe um array de promises como entrada (um iterável). 
//Em seguida, ela é resolvida quando todas as promises são resolvidas ou quando qualquer uma delas é rejeitada.

/*Promise.all(promises).then((valor)=>{
    console.log(valor);
})
.catch((erro)=>{
    console.log(erro)
})
*/

// Resolve a primeira promise resolvida pelo sistema e já retorna, caso resolver com erro retonar o erro
/*Promise.race(promises).then((valor)=>{
    console.log(valor);
})
.catch((erro)=>{
    console.log(erro)
})*/

const baixaPagina =()=>{
    const emCache = true;
    
    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('Baixei Página', 3000)
    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e=> console.log(e))