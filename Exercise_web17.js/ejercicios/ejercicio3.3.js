console.log('ejercicio 3.3')

const input1 = 'string';
// create your function here
const yourFunction = (input) => {
    const delReves = input.split('').reverse().join('')
    const long = input.length
    return `${long} ${delReves}`
}; // '6 gnirts'
console.log(yourFunction(input1))


const input2 = 'variable';
// '8 elbairav'
console.log(yourFunction(input2))


const input3 = 'pointer';
console.log(yourFunction(input3)); // '7 retniop'