//Exercício de interpretação de código 01:
/*
a)
10
50

b)
não apareceria nada no console. mesmo que a funcão retorne um resultado, ele só será visível através do console.log.

*/ 

//Exercício de interpretação de código 02:
/*
a)
a função formata o texto inserido pelo usuário para minúsculo e verifica se tem a palavra "cenoura" no texto, retornando true ou false.

b)
true
true
true
*/

//Exercício de escrita de código 01:
//a)
function imprimirBio(){
    return "Eu sou Andrei, tenho 24 anos, moro em Goiás e sou estudante."
}

console.log(imprimirBio())

//b)
function imprimirBio2(nome, idade, endereco, profissao){
    let informacoes = "Eu sou " + nome + "," + " tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao + "."
    return informacoes
}

let nome = "Andrei"
let idade = 24
let endereco = "Goiás"
let profissao = "Programador"

console.log(imprimirBio2(nome, idade, endereco, profissao));

//Exercício de escrita de código 02:
//a)
function somar(numero1, numero2){
    let resultado1 = numero1 + numero2
    return resultado1
}
console.log(somar(100, 25));

//b
function verificarMaior(numero1, numero2){
    let resultado2 = numero1 >= numero2
    return resultado2
}
console.log(verificarMaior(10, 5));

//c
function verificaPar(numero){
    let resultado3 = numero % 2 == 0
    return resultado3
}

console.log(verificaPar(5));

//d
function somar(numero1, numero2){
    let resultSoma = numero1 + numero2
    resultSoma
    return resultSoma
}
function subtrair(numero1, numero2){
    let resultSubtracao = numero1 - numero2
    return resultSubtracao
}
function multiplicar(numero1, numero2){
    let resultMultiplicacao = numero1 * numero2
    return resultMultiplicacao
}
function dividir(numero1, numero2){
    let resultDivisao = numero1 / numero2
    return resultDivisao
}

let numero1 = prompt("Digite o número 1")
let numero2 = prompt("Digite o número 2")

console.log("Números inseridos: " + numero1 + " e " + numero2);
console.log("Soma: " + somar(numero1, numero2));
console.log("Diferença: " + subtrair(numero1, numero2));
console.log("Multiplicação: " + multiplicar(numero1, numero2));
console.log("Divisão: " + dividir(numero1, numero2));





