function sumar(num1, num2) {
  return num1 + num2;
}

function calculadora() {
  var opcion = prompt(
    "Elija una opción:\n1. Suma"
  );
  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2, resultado;

  if (opcion === "1") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    resultado = sumar(num1, num2);
  } else {
    resultado = "Opción no válida";
  }

  alert("El resultado es: " + resultado);
}

calculadora();