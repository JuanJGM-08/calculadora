function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero";
  }
  return num1 / num2;
}

function calculadora() {
  var opcion = prompt(
    "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"
  );
  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2, resultado;

  if (opcion !== "5" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

  switch (opcion) {
    case "1":
      resultado = sumar(num1, num2);
      break;
    case "2":
      resultado = restar(num1, num2);
      break;
    case "3":
      resultado = multiplicar(num1, num2);
      break;
    case "4":
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = "Opción no válida";
      break;
  }

  alert("El resultado es: " + resultado);
}

calculadora();