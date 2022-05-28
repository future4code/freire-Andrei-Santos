```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salFixo = 2000
  let comissao1 = qtdeCarrosVendidos * 100
  let comissao2 = 5 * valorTotalVendas / 100
  let salFinal = salFixo + comissao1 + comissao2 
  return salFinal
}
```