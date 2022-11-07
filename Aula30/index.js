const mostrarHora=()=>{
    let data = new Date(0,0,0);
    return data.toLocaleTimeString('pt-BR',{hour12:false});
}

const timer = setInterval(function (){console.log(mostrarHora())},2000)
setTimeout(function(){clearInterval(timer)},14000)
setTimeout(function(){console.log("Olá Mundo")},14000)