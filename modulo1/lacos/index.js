/*
Exercícios de interpretação de código

1
o código está repetindo até que a variável i seja menor que 5,
e a cada repetição ele adiciona o valor da própria variável valor
+ o valor atual da variável i, que por sua vez aumenta em 1 a cada
repetição.

resultado impresso: 10

2 a)
será impresso:
19
21
23
25
27
30

b)
Sim,
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
		console.log(numero)
}

3
*
**
***
****
*/

//Exercícios de escrita de código

//1 
const pets = Number(prompt("quantos bichinhos de estimação você tem?"))
let nomesPets = [pets]

if(pets === 0){
    console.log("Que pena! Você pode adotar um pet!");
}
else if(pets > 0){
    for(let i=0; i<pets; i++){
        nomesPets[i] = prompt(`Digite o nome do pet ${i+1}`)
    }
}

console.log(nomesPets);

//2
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//a)
function imprimeArray(array){
    for(let i of array){
        console.log(i);
    }
}

imprimeArray(arrayOriginal)

//b)
function divideArray(array){
    for(let i of array){
        console.log(i / 10);
    }
}

divideArray(arrayOriginal)

//c)
function novoArray(array){
    for(let i of array){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

novoArray(arrayOriginal)

//d)
function imprimeElemento(array){
    for(let i=0; i<array.length; i++){
        console.log(`O elemento do índex ${i} é ${array[0]++}`);
    }
}

imprimeElemento(arrayOriginal)

//e)
function maiorEmenor(array){
    let minimo = 1
    let maximo = 0
    //for para achar o maior numero do array
    for(let i=1; i<array.length; i++){
        if(array[i] > maximo){
            maximo = array[i]
        }
    }
    //for para achar o menor numero do array
    for(let i=1; i<array.length; i++){
        if(array[i] < minimo){
            minimo = array[i]
        }
    }

    console.log(`O maior número é ${maximo} e o menor é ${minimo}`);
}

maiorEmenor(arrayOriginal)