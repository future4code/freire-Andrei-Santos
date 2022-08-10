const tarefas = ["Lavar a louça", "Comprar Leite"];

const novaTarefa = process.argv[2];

tarefas.push(novaTarefa);
console.log("");
console.log("Tarefa adicionada com sucesso!");
console.log("");

console.log("tarefas:");
console.log(tarefas);
console.log("");
