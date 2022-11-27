const cliente = {
    nome: "Andre",
    idade: 27,
    cpf : "17048906081" ,
    email: "andre@email.com",
};

console.log(`Bem-Vindo ${cliente.nome}`);
//console.log(cliente.nome);

console.log(`Sua idade é ${cliente.idade}`);

console.log(`Os três primeiros digitos do CPF do cliente ${cliente.nome} é: ${cliente.cpf.substring(0,3)} `);