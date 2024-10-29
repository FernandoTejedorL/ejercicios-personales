/*Escribir una función llamada imprimirArreglo que reciba un arreglo e 
imprima cada elemento en una línea a parte:*/

const printArray = array => {
    for (let number = 0 ; number < array.length ; number++){
        console.log(array[number]);
    }
}

printArray ([1, 'Hola', 2, 'Mundo'])