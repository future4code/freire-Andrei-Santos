/* Exercício de interpretação de código 1:
10
10 5
*/

/* Exercício de interpretação de código 2:
10 10 10
*/

/* Exercício de interpretação de código 3:
hrTrabalhadaDia   
valorRecebidoDia
*/


//Exercício de escrita de código 1
let nome
let idade

console.log(typeof(nome))
console.log(typeof(idade))
//o tipo impresso das variáveis foi "undefined" porque nenhum valor inicial havia sido atribuido á elas.
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

console.log(typeof(nome))
console.log(typeof(idade))
//o tipo impresso das variáveis mudou para "string" após o usuário inserir os dados.
console.log("Olá", nome, "você tem", idade, "anos")


//Exercício de escrita de código 2
let p1 = "Você gosta de viajar?"
let p2 = "Ontem choveu á noite?"
let p3 = "Você está usando uma roupa azul hoje?"

let r1 = prompt(p1)
let r2 = prompt(p2)
let r3 = prompt(p3)

console.log(p1 + " - " + r1)
console.log(p2 + " - " + r2)
console.log(p3 + " - " + r3)


//Exercício de escrita de código 3
let a = 10
let b = 25

let c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 


//Desafio extra
let numero1 = Number(prompt("primeiro numero"))
let numero2 = Number(prompt("segundo numero"))

console.log("O primeiro número somado ao segundo número resulta em: ", numero1+numero2)
console.log("O primeiro número multiplicado pelo segundo número resulta em: ", numero1*numero2)



