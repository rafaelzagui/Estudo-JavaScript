function confereNum(num1,num2)
{
   return (num1<num2)?`numero 2: ${num2} é maior que numero 1: ${num1}`:`numero 1: ${num1} é maior que numero 2: ${num2}`
}
const max = (num1,num2) => num1>num2?num1:num2
const resultado = confereNum(20,10)
console.log(max(100,20))