/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack!");

if(confirm("Quer iniciar uma nova rodada?")) {
   const carta1User = comprarCarta(); 
   const carta2User = comprarCarta(); 
   const carta1Comp = comprarCarta(); 
   const carta2Comp = comprarCarta(); 

   console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto} - pontuação ${carta1User.valor + carta2User.valor}`);
   console.log(`Computador - cartas: ${carta1Comp.texto} ${carta2Comp.texto} - pontuação ${carta1Comp.valor + carta2Comp.valor}`);

   if(carta1User.valor + carta2User.valor == carta1Comp.valor + carta2Comp.valor){
      console.log("Empate!");
   }
   else if(carta1User.valor + carta2User.valor > carta1Comp.valor + carta2Comp.valor){
      console.log("O usuário ganhou!");
   }
   else if(carta1User.valor + carta2User.valor < carta1Comp.valor + carta2Comp.valor){
      console.log("O computador ganhou!");
   }


} else {
   console.log("O jogo acabou");
}