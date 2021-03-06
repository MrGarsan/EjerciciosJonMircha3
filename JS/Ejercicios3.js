//9) Programa una función que obtenga un número aleatorio entre 501 y 600.
console.log("%cEjercicio 9", "font-weight:bold; font-size:14px");
const aleatorio = () =>
  console.log(Math.floor(Math.random() * (600 - 500 + 1) + 500));
aleatorio();

//10)Programa una funcion que reciba un número y evalúe si es capicua o no (que se lee igual en un sentido que en otro.)
console.log("%cEjercicio 10", "font-weight:bold; font-size:14px");
const capicua = (numero = undefined) => {
  // Verificadores
  const texto = new RegExp("^([0-9])*$", "ig");
  if (!numero || numero === undefined)
    return console.warn("Inserte un número mayor a 3 cifras Ej. 2002.");
  if (Math.sign(numero) === -1)
    return console.error(
      "Ingresastes un número negativo, ingresa uno positivo mayor a 3 cifras Ej. 3003."
    );
  if (!texto.test(numero))
    return console.error(
      "Ingresastes un texto, ingresa una cadena numérica válida."
    );

  //Volver el parámetro número una cadena de texto
  numero = numero.toString();

  //Hacer al revés el número
  let i = numero.length;
  let palabraAlreves = "";

  for (i; i >= 0; i--) {
    palabraAlreves = palabraAlreves + numero.charAt(i);
  }
  //Verificar que sea un palindromo.
  numero === palabraAlreves
    ? console.log(
        `El número ${numero} es capicua. Ya que al revés se escribiría ${palabraAlreves}.`
      )
    : console.log(
        `El número ${numero} no es capicua. Ya que al revés se escribiría ${palabraAlreves}.`
      );
};

capicua(404404);

//11)Programa una función que calcule el factorial de un número.
console.log("%cEjercicio 11", "font-weight:bold; font-size:14px");
const factorial = (numero) => {
  // Verificadores
  const texto = new RegExp("^([0-9])*$", "ig");
  if (numero === undefined)
    return console.warn("Inserte un número válido.");
  if (Math.sign(numero) === -1)
    return console.error(
      "Ingresastes un número negativo, ingresa uno positivo."
    );
  if (!texto.test(numero))
    return console.error("Ingresastes un texto, objeto o array, ingresa un número válido.");
  

  //Factorial
  let factor = 1;
  for (let i = 1; i <= numero; i++) {
    factor = factor * i;
  }
  return console.info(
    `El factor indicado es ${numero}, su producto es ${factor}.`
  );
};

factorial(5);

console.log(
  "%c3er Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
