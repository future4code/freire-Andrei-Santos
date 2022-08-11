console.log("")
console.log("-------------- exercicio1 --------------")

//Exercicio1

//a)
//R: acontece um erro porque o tipo da variável definido é string e ela recebeu um valor do tipo number.

//b)
//R: devemos usar Union Type com a seguinte sintaxe: 
// let meuNumero : number | string

//c e d)
//R:
enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}
    
type pessoa = {
    nome:string,
    idade:number,
    corFavorita:CoresArcoIris
}

const p1:pessoa = {
    nome: "Pedro",
    idade: 25,
    corFavorita: CoresArcoIris.AMARELO
}

const p2:pessoa = {
    nome: "João",
    idade: 40,
    corFavorita: CoresArcoIris.VERDE
}

const p3:pessoa = {
    nome: "Maria",
    idade: 34,
    corFavorita: CoresArcoIris.VERMELHO
}

console.log(p1)
console.log(p2)
console.log(p3)

