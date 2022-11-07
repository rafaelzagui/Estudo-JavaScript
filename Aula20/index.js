const data = new Date(2022,9);
console.log(data.toString())
function formataData(data){
    const dia = (data.getDate()<10)?"0":"";
    const mes = (data.getMonth()+1<10)?"0":"";
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

 console.log(`${dia}/${mes}/${ano}  ${hora}:${minutos}:${segundos}`);

}
formataData(data)