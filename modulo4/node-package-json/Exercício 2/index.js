const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (operacao === "add") {
  return (
    console.log("------------"),
    console.log(`a adição de ${num1} + ${num2} é:`),
    console.log(num1 + num2),
    console.log("")
  );
}
if (operacao === "sub") {
  return (
    console.log("------------"),
    console.log(`a subtração de ${num1} - ${num2} é:`),
    console.log(num1 - num2),
    console.log("")
  );
}
if (operacao === "mult") {
  return (
    console.log("------------"),
    console.log(`a multiplicação de ${num1} x ${num2} é:`),
    console.log(num1 * num2),
    console.log("")
  );
}
if (operacao === "div") {
  return (
    console.log("------------"),
    console.log(`a divisão de ${num1} / ${num2} é:`),
    console.log(num1 / num2),
    console.log("")
  );
} else {
  return console.log(
    "O primeiro argumento deve ser uma das 4 operações matemáticas: 'add', 'sub', 'mult' ou 'div' para adição, subtração, multiplicação e divisão respectivamente."
  );
}
