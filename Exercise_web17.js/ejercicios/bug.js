/*
Ejercicio 2 Arreglar bug
Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice
que no funciona. No nos da el error, solo este código que es el que tiene en producción.
Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.
*/
console.log('ejercicio 2: el bug')

/*const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i <= numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
    };
    let listaNumeros = [1, 2, 3, 4, 5];
    let promedioNumeros = calcularPromedio(listaNumeros)

console.log(promedioNumeros)
*/

//solucionado; la condicion del bucle no puede ser igual al i
console.log('ejercicio 2: el bug')

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
    };
    let listaNumeros = [1, 2, 3, 4, 5];
    let promedioNumeros = calcularPromedio(listaNumeros)

console.log(promedioNumeros)
