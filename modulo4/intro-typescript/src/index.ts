
//Exercício 1  :

function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  const resposta1 = checaTriangulo(5, 5, 5)
  console.log("--------- Exercício 1 ----------")
  console.log(resposta1)
  console.log("")

//-------------------------------

//Exercício 2  :

function imprimeTresCoresFavoritas() {
    const cor1:string = "verde"
    const cor2:string = "preto"
    const cor3:string = "azul"

    return [cor1, cor2, cor3]
 }

 const resposta2 = imprimeTresCoresFavoritas()
 console.log("--------- Exercício 2 ----------")
 console.log(resposta2)
 console.log("")

//-------------------------------

//Exercício 3  :

function checaAnoBissexto(ano:number):boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

 const resposta3 = checaAnoBissexto(2024)
 console.log("--------- Exercício 3 ----------")
 console.log(resposta3)
 console.log("")

//-------------------------------


//Exercício 4  :

function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

  const resposta4 = comparaDoisNumeros(100, 25)
  console.log("--------- Exercício 4 ----------")
  console.log(resposta4)
  console.log("")

//-------------------------------


//Exercício 5  :

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }

   const resposta5 = checaRenovacaoRG(2022, 1998, 2000)
   console.log("--------- Exercício 5 ----------")
   console.log(resposta5)
   console.log("")
   
//-------------------------------
