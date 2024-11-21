//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbersMultiply = (numbers) => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

numbersMultiply([2, 3, 6, 7]);

//Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const numbersDivided = (numbers) => {
  const result = numbers.map((number, index) => {
    return number / (index + 1);
  });
  return result;
};

const resultt = numbersDivided([3, 40, 8]);
console.log(resultt);

//Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const letterUpper = (letters) => {
  const resultLetter = letters.map((letter) => {
    return letter.toUpperCase();
  });
  return resultLetter;
};

const solucion = letterUpper(["Macarena", "holi"]);
console.log(solucion);

//Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras
//que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
// Tiene que funcionar con mayúsculas y minúsculas.

const coincidence = (words, letter) => {
  const resultCoincidence = words.filter((word) =>
    word.toLowerCase().startsWith(letter.toLowerCase())
  );
  if (resultCoincidence.length > 0) {
    return resultCoincidence;
  }
  console.log(`No hay palabras que coincidan`);
};

const reResultCoincidence = coincidence(["Macarena", "amigos", "arbusto"], "a");
console.log(reResultCoincidence);

//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const addNumbers = (numbers) => {
  const acumulator = numbers.reduce((acc, number) => acc + number);
  console.log(acumulator);
};

addNumbers([2, 40, 32, 1, 50, 2, 3, 4, 2, 12]);

//Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//"Número: 2 - Cuadrado: 4 - Cubo: 8".

const squareAndCubed = (numbers) => {
  numbers.forEach((number) => {
    console.log(
      `Número:${number} -Cuadrado: ${Math.pow(number, 2)} -Cubo ${Math.pow(
        number,
        3
      )}`
    );
  });
};

squareAndCubed([2, 40, 32, 1, 50, 2, 3, 4, 2, 12]);

//- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const upperVocals = (word) => {
  const vowels = "aeiou";
  const result = word.split("").reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      return acc + letter.toUpperCase();
    }
    return acc + letter;
  });
  console.log(result);
};
upperVocals("macarena");

//- Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const numberGreater = (numbers) => {
  const compare = numbers.some((number) => number > 5);
  console.log(compare);
};

numberGreater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud,
// por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const lengthWords = (words, number) => {
  const result = words.filter((word) => {
    return word.length === number;
  });
  console.log(result);
};
lengthWords(["hola", "adios", "gato", "casa"], 4);

//- Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const numbersDivider = (numbers, divider) => {
  const result = numbers.filter((number) => {
    return number % divider === 0;
  });
  console.log(result);
};
numbersDivider([5, 9, 18, 3, 6], 3);

//- Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
//const array = [
//{ name: 'John', age: 25 },
//{ name: 'Jane', age: 30 },
//{ name: 'Bob', age: 20 }];

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

const filterAge = () => {
  const result = users.filter((user) => {
    return user.age < 30;
  });
  console.log(result);
};

filterAge();

//- Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const numbersEven = (numbers) => {
  const result = numbers.every((number) => {
    return number % 2 === 0;
  });
  console.log(result);
};

numbersEven([5, 9, 3, 2, 4]);

//- Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const orderLength = (words) => {
  const result = words.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(result);
};
orderLength(["hola", "no", "adios", "vengaaa", "xao"]);

//- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const reverseWord = (word) => {
  const result = word.split("").reduce((acc, letter) => {
    return letter + acc;
  });
  console.log(result);
};
reverseWord("mariposa");

//- Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

const addNumbersReto = (numbers) => {
  const result = numbers.map((number) => {
    return Number(String(number).charAt(0)) + Number(String(number).charAt(1));
  });
  console.log(result);
};
addNumbersReto([20, 10, 23, 50, 21]);

//- Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

const users2 = [
  {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30,
  },
  {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25,
  },
  {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35,
  },
  {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28,
  },
  {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40,
  },
];

const userId = (id) => {
  const result = users2.filter((user) => {
    return user.id !== id;
  });
  console.log(result);
};

userId("user002");
