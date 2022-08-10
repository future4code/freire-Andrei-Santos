//Respostas:

// a):
// Acessamos argumentos passados aos nossos scripts através de process.argv

// b):
const nome = process.argv[2];
const idade = process.argv[3];
const novaIdade = Number(idade) + 7;

console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`
);
