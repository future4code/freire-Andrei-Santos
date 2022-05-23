let usuario = []
let computador = []

if(confirm("Boas vindas ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")){

   //sortear cartas iniciais
   let cartasOk = false
   while(!cartasOk){
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())

      if((usuario[0].valor === 11 && usuario[1].valor === 11) ||
         (computador[0].valor === 11 && computador[1].valor === 11)){
            usuario = []
            computador = []
         }
      else{
         cartasOk = true
      }
   }

   // Mostrar cartas do usuário e primeira do computador
   // Perguntar se o usuário deseja comprar mais até que ele diga que não
   let comprar = true
   while(comprar){
      let textos = ""
      let pontos = 0
      for(let carta of usuario){
         textos += carta.texto + " "
         pontos += carta.valor
      }
   }
}
