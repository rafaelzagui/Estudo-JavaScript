
const btn = document.querySelector('button')
const form = document.querySelector("#form")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso').value
    const inputAltura = e.target.querySelector('#altura').value
    const peso = Number(inputPeso)
    const altura = Number(inputAltura)
    if (!peso) {
        setResult('Peso Invalido')
        return;
    }
    if (!altura) {
        setResult('Altura Invalida')
        return;
        
    }
    console.log("I'am here")
    const IMC  = calcIMC(peso, altura)
    console.log(IMC)
    const msgGrau = grauImc(IMC)
    setResult(`seu IMC é : ${IMC}, ${msgGrau}`,true)
});
 function grauImc(imc){
    let msg = '';
    if(imc<18.5)
    {
        msg ='Abaixo do peso'
        return msg 
    }
    if(imc>=18,5 && imc<=24.9)
    {
        msg ='Peso Normal'
        return msg
    }
    if(imc>=25 && imc <=29.9)
    {
        msg = 'Sobrepeso'
        return msg
    }
    if(imc>=30 && imc<=34.9)
    {
        msg = 'Obesidade Grau 1'
        return msg
    }
    if(imc>=35 && imc<=39.9)
    {
        msg = 'Obesidade Grau 2'
        return msg
    }
    if(imc>40)
    {
        msg = 'Obesidade Grau 3'
        return msg 
    }

 }
 function calcIMC(peso, altura){
   const resultado = peso/altura **2//eleva ao quadrado  // ou const resultado = peso/(altura*altura)
   return resultado.toFixed(2)
}
function setResult(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ``;
    const p = criaP();
    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad') 
    }
    resultado.appendChild(p)
    p.innerHTML = `${msg}`
}
function criaP() {
    const p = document.createElement('p')
    
    return p;
}
