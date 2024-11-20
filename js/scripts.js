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
  const square = numbers.map((number) => number * number);
  const cubed = numbers.map((number) => number * number * number);
  console.log(`Número: ${number}-Cuadrado: ${square} -Cubo: ${cubed}`);
};

squareAndCubed([2, 40, 32, 1, 50, 2, 3, 4, 2, 12]);
