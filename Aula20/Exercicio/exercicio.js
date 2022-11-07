/*const data = new Date()
const h1 = document.querySelector('#texto');
function geraMes(mes){
   let mesTxt ='';
    switch (mes)
    {
    case 0 : return mesTxt='Janeiro'
    case 1 : return mesTxt='Fevereiro'
    case 2 : return mesTxt='Março'
    case 3 : return mesTxt='Abril'
    case 4: return mesTxt = 'Maio'
    case 5 : return mesTxt='Junho'
    case 6 : return mesTxt='Julho'
    case 7: return mesTxt = 'Agosto'
    case 8: return mesTxt = 'Setembro'
    case 9: return mesTxt = 'Outubro'
    case 10: return mesTxt = 'Novembro'
    case 11: return mesTxt = 'Dezembro'
    }
}
function geraTexto(data)
{
   const dia =textoDia(data.getDay()) 
   const numDia = (data.getDate()<10)?`0${data.getDate()}`:`${data.getDate()} `
   const mes = geraMes(data.getMonth()) ;
   const ano = data.getFullYear();
   const horas = data.getHours();
   const minutos = (data.getMinutes()<10)?`0${data.getMinutes()}`:`${data.getMinutes()}`;
  h1.innerHTML =`${dia}, ${numDia} de ${mes} de ${ano} as ${horas}:${minutos}`;
}
  geraTexto(data)
 function textoDia(dia)
 {
    let mesTxt ='';
    switch (dia)
    {
    case 0 : return mesTxt='Domingo'
    case 1 : return mesTxt='Segunda-feira'
    case 2 : return mesTxt='Terça-Feira'
    case 3 : return mesTxt='Quarta-Feira'
    case 4 : return mesTxt='Quinta-Feira'
    case 5 : return mesTxt='Sexta-Feira'
    case 6:  return mesTxt = 'Sabado'
    }
 }
*/
const h1 = document.querySelector('#texto');
const data = new Date();
const opc ={
   dateStyle:'full',
 
};
h1.innerHTML = `${data.toLocaleDateString("pt-BR",opc)}, ${data.toLocaleTimeString("pt-BR",{timeStyle: 'short'})}`

 