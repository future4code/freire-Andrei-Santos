//Exercícios de interpretação de código
/*
01 a)
Matheus Nachtergaele
Virginia Cavendish
Globo 14h

02 a)
nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD"

b)
Essa sintaxe é chamada de espalhamento (ou
spread), e ela serve para criar uma cópia de um objeto (ou
array) inteiro

3 a)
false
undefined

b)
o primeiro resultado foi impresso porque false é a propriedade do objeto pessoa,
e o segundo resultado foi impresso porque a propriedade altura não existe no objeto pessoa.
*/

//Exercícios de escrita de código
//1 a)
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

function descrever(pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
}

descrever(pessoa)

//b)
const pessoa2 = {
    ...pessoa,
    apelidos: ["Manda", "Dinha", "Mama"]
}

descrever(pessoa2)

//2 a)
const p1 = {
    nome: "Pedro",
    idade: 25,
    profissao: "Advogado"
}
const p2 = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

//b)
function retornaArray(p1){
    const array = [p1.nome, p1.nome.length, p1.idade, p1.profissao, p1.profissao.length]
    console.log(array);
}

retornaArray(p1)