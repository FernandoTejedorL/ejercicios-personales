/* 2. Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, 
número / 2, números pares y números impares.*/

const dataNumbers = {
    numbers: [10, 32, 31, 67, 9, 2, 51, 4],
    firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }    
}
for (const number of dataNumbers.numbers) {
    dataNumbers.firstFloor.secondFloor.numbersPlus2.push(number+2);
    dataNumbers.firstFloor.thirdFloor.numbersDouble.push(number*2);
    dataNumbers.fourthFloor.numbersDividedBy2.push(number/2);
    if (number % 2 === 0){
        dataNumbers.fifthFloor.onlyEven.push(number);
    } else {
        dataNumbers.fifthFloor.onlyOdd.push(number);
    }
}
console.log(dataNumbers);

/*- Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", 
y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo 
que no sabes obtener.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String*/


const dataStrings = {
    firstFloor: {
      vowels: [] // Vocales
    },
    secondFloor: {
      consonants: [] // Consonantes
    },
  
    fourthFloor: {
      asciiCode: [] // Ascii code de cada letra
    },
    fifthFloor: {
      //Cada palabra de la frase será una posición del array
      wordsInUppercase: [], // Palabras de la frase en mayúsculas
      wordsInLowercase: [] // Palabras de la frase en minúsculas
    },
    sixthFloor: {
      // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.
  
      // REGLAS DE CODIFICACIÓN
      // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
      // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
      // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
      secretCode: ''
    }
  };
  const sentenceTo = sentence =>{
    let wordsToUpper = '';
    let wordsToLower = '';
    let newSecret = '';
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    for (let counter = 0; counter < sentence.length ; counter++){
        let currentChar = sentence.charAt(counter)
        dataStrings.fourthFloor.asciiCode.push(sentence.charCodeAt(counter));
        if (vowels.includes(currentChar.toLowerCase())){
            dataStrings.firstFloor.vowels.push(sentence.charAt(counter));
            wordsToUpper+= sentence.charAt(counter).toUpperCase();
            wordsToLower+= sentence.charAt(counter).toLowerCase();
            newSecret+= vowels.indexOf(sentence.charAt(counter).toLowerCase())
        } else if (consonants.includes(currentChar.toLowerCase())){
            dataStrings.secondFloor.consonants.push(sentence.charAt(counter));
            wordsToUpper+= sentence.charAt(counter).toUpperCase();
            wordsToLower+= sentence.charAt(counter).toLowerCase();
            newSecret+= consonants.charAt(consonants.indexOf(currentChar)-1);
        } else {
            wordsToUpper += ','
            wordsToLower += ','
            newSecret+= consonants.charAt(Math.floor(Math.random()*consonants.length));
        }
    }
    dataStrings.fifthFloor.wordsInUppercase.push(wordsToUpper.split(','));
    dataStrings.fifthFloor.wordsInLowercase.push(wordsToLower.split(','));
    dataStrings.sixthFloor.secretCode+= newSecret;
  }
  sentenceTo('el gato que esta triste y azul');
  console.log(dataStrings);
