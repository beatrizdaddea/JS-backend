const dados = require("./cliente.json"); //  importar e exportar modulos dentro de uma aplicação

// é usado o IMPORT para que ambos JavaScript do browser e JavaScript do servidor (Node.js) podem usar


console.log(dados); 
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString); 
console.log(typeof clienteEmString);

console.log(clienteEmString.nome); // não é possivel acessar as propriedades por ser string 

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);