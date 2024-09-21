console.log('ejercicio 3.2')
// Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input = 10;
// create your function here
const yourFunction1= (input) => {
    const fisrt = input.toString().split('').join('-');//convierto a string, separo los carazteres con '' y uno con '-'
    return fisrt
}; // '1-0'
console.log('input 1 function',yourFunction1(input))

const secondInput = 1;
const yourFunction2 = (input) => {
    return input.toString()
}; // '1'
console.log(yourFunction2(secondInput))

const thirdInput = 11234;
const yourFunction3 = (input) => {
    return input
}; 
console.log('thirdInput', yourFunction1(thirdInput) )// '1-1-2-3-4'