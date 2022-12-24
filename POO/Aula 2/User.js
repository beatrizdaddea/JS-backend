export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento
        this.role = role || 'estudante'; 
        this.ativo = ativo;
    }
    
    exibirInfos(){
        return `usuário: ${this.nome}, email: ${this.email}, tipo: ${this.role} `
    }
    

}

const novoUser = new User('Juliana', 'j@j.com','2005-01-01');
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser));