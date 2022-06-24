/*
Exercícios de interpretação de código

1 a)
o código verifica se o número inserido é par ou impar.

b)
todos os números pares

c)
todos os números ímpares

2 a)
o código adiciona o preço em uma variável conforme a fruta digitada pelo usuário e depois retorna uma mensagem com essa fruta e o preço.

b)
O preço da fruta Maçã é R$ 2.25

c)
O preço da fruta Pêra é R$ 5.5

3 a)
está pedindo para o usuário inserir um número, e transformando esse número que é recebido como String para Number.

b) 
com o número 10 seria impresso:
Esse número passou no teste
e com o número -10 nada seria impresso.

c)
Sim, o último console log não funcionaria como esperado por estar fora do escopo do if.
*/

//Exercícios de escrita de código
//1
const idade = Number(prompt("Digite sua idade"))

if(idade >= 18){
    console.log("Você pode dirigir");
}
else{
    console.log("Você não pode dirigir");
}

//2
const turno = prompt("digite o turno em que estuda: M (matutino) ou V (Vespertino) ou N (Noturno)")

if(turno == "M"){
    console.log("Bom Dia!");
}
else if(turno == "V"){
    console.log("Boa Tarde!");
}
else if(turno == "N"){
    console.log("Boa Noite!");
}

//3
const turno2 = prompt("digite o turno em que estuda: M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turno2) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
        
}

//4
const genero = prompt("Qual o gênero de filme que vão assistir?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if(genero == "fantasia" && precoIngresso < 15){
    console.log("Bom filme!");
}
else{
    console.log("Escolha outro filme :");
}

//DESAFIOS
//1)
const genero2 = prompt("Qual o gênero de filme que vão assistir?")
const precoIngresso2 = Number(prompt("Qual o preço do ingresso?"))
const lanche = prompt("qual lanchinho você vai comprar?")

if(genero2 == "fantasia" && precoIngresso2 < 15){
    console.log("Bom filme!");
    console.log(`Aproveite o seu ${lanche}`);
}
else{
    console.log("Escolha outro filme :");
}
