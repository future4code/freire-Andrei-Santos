console.log("");
console.log("-------------- exercicio1 --------------");
var CoresArcoIris;
(function (CoresArcoIris) {
    CoresArcoIris["VERMELHO"] = "vermelho";
    CoresArcoIris["LARANJA"] = "laranja";
    CoresArcoIris["AMARELO"] = "amarelo";
    CoresArcoIris["VERDE"] = "verde";
    CoresArcoIris["AZUL"] = "azul";
    CoresArcoIris["ANIL"] = "anil";
    CoresArcoIris["VIOLETA"] = "violeta";
})(CoresArcoIris || (CoresArcoIris = {}));
const p1 = {
    nome: "Pedro",
    idade: 25,
    corFavorita: CoresArcoIris.AMARELO
};
const p2 = {
    nome: "João",
    idade: 40,
    corFavorita: CoresArcoIris.VERDE
};
const p3 = {
    nome: "Maria",
    idade: 34,
    corFavorita: CoresArcoIris.VERMELHO
};
console.log(p1);
console.log(p2);
console.log(p3);
//# sourceMappingURL=exercicio1.js.map