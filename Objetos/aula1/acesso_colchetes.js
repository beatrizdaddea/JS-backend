const cliente = {
    nome: "Andre",
    idade: 27,
    cpf : "17048906081" ,
    email: "andre@email.com",
};

console.log(`Bem-Vindo ${cliente["nome"]}`);
//console.log(cliente.nome);

console.log(`Sua idade é ${cliente["idade"]}`);

const chaves = ["nome", "email", "idade", "cpf"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})