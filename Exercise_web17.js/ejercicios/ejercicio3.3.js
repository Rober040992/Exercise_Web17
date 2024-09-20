console.log('ejercicio 3.3')

const input1 = 'string';
// create your function here
const yourFunction = (input) => {
    const delReves = input.split('').reverse().join('')
    const long = input1.length
    return `${long} ${delReves}`
}; // '6 gnirts'
console.log(yourFunction(input1))

const input2 = 'variable';
const yourFunction2 = (input) =>{
    return input2.length +' '+  input.split('').reverse().join('')
}; // '8 elbairav'

console.log(yourFunction2(input2))

const input3 = 'pointer';
yourFunction(input3); // '7 retniop'