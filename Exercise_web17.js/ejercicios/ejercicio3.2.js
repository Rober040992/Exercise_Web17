console.log('ejercicio 3.2')
// Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input = 10;
// create your function here
const yourFunction1= (input) => {
    const fisrt = input.toString().split('').join('-');//convierto a string, separo los carazteres con '' y uno con '-'
    return fisrt
}; // '1-0'
console.log('first input function',yourFunction1(input))

const secondInput = 1;
// '1'
console.log('second input', yourFunction1(secondInput))

const thirdInput = 11234;

console.log('thirdInput', yourFunction1(thirdInput) )
// '1-1-2-3-4'