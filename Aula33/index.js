/* function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' '+ resto;
    }
    return falaResto
 }

 const fala=  falaFrase('Olá');
 const resto= fala('mundo');
 console.log(resto)*/

 function criaMultiplicador(multiplicador)
 {
    return function(x)
    {
        return x*multiplicador
    };
 }
  const multiplicador = criaMultiplicador(4);
  const num = multiplicador(10)
 console.log(num)