const rand =(min,max)=> Math.floor(Math.random()*(max-min)+min);// gera numeros randomicos entre intervalos
const geraMaiuscula = () => String.fromCharCode(rand(65,91));// pega a função randomica pega um numero entre 65 a 91 e pega o caracter da tabela asc
const geraMinuscula = () => String.fromCharCode(rand(97,123));// pega a função randomica pega um numero entre 97 a 123 e pega o caracter da tabela asc
const geraNumero = () => String.fromCharCode(rand(48,58));//// pega a função randomica pega um numero entre 45 a 58 e pega o caracter da tabela asc
const simbolos = ',.^~[]{}!@#$%¨&*()_-/\\|=';
const geraSimbolo = () => simbolos[rand(0,simbolos.length)];
console.log(geraMaiuscula(),' ',geraNumero(), " ",geraSimbolo());

export default function geraSenha(qtd,maiusculas,minuscula,numero,simbolos){
const senhaArray =[];
qtd = Number(qtd);
for (let i = 0; i<qtd; i++){
    maiusculas&& senhaArray.push(geraMaiuscula());
    minuscula&& senhaArray.push(geraMinuscula());
    numero&& senhaArray.push(geraNumero());
    simbolos&& senhaArray.push(geraSimbolo());
}
return senhaArray.join('').slice(0,qtd);
}