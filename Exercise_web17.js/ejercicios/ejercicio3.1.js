console.log('ejercicio 3.1')
//Crea una función para que con estos datos de entrada se produzca los siguientes resultados

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]

const yourFunction = (input) => {
    const newInput = [...input]
    const lastItem =  newInput.pop();
    const unir = newInput.join('/')
    return `${unir}.${lastItem}`
}
console.log('input1 function:',yourFunction(input1))

    const input2 = [
    'CodinGame',
    'python',
    'py',
    ];

console.log('input2 function:',yourFunction(input2)) // 'CodinGame/python.py
        
    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]

console.log('input 3 function:' ,yourFunction(input3)) // 'programming/languages/easy/beginner/useful/pythonstuff.py'