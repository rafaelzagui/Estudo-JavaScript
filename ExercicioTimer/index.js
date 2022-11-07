


const mostrarHora=()=>{
    let data = new Date(0,0);
    let segundos = data.getSeconds();
    return segundos;
}

let segundos = mostrarHora()
setInterval(function(){
},1000)
setTimeout(function(){clearInterval()},14000)
setTimeout(function(){console.log("Olá Mundo")},14000)