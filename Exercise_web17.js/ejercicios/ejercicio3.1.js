console.log('ejercicio 3')
//Crea una función para que con estos datos de entrada se produzca los siguientes resultados

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]

const yourFunction = () => {return input1.join('/')}
    console.log('input1 function:',yourFunction())


    const input2 = [
    'CodinGame',
    'python',
    'py',
    ];

    const yourFunction2 = (list) => {
        const lastItem = list.pop()
        //console.log(lastItem) //esta guardando 'py'
        const unido = list.join('/')
        //console.log(unido)
        return `${unido}.${lastItem}`
    }; 
    console.log('input2 function:',yourFunction2(input2)) // 'CodinGame/python.py
        
    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]

    const yourFunction3 = (list2) => {
        return list2.slice(0,-1).join('/') + '.' + list2.pop() ///slice coge todos los elementos del array menos el ultimo y los une con join/. , añadimos +'.' + el ultimo elemento de la lista
    };
    console.log('input 3 function:' ,yourFunction3(input3)) // 'programming/languages/easy/beginner/useful/pythonstuff.py'