import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo) // superclasse é o user
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} foi criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2000-07-08')
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JS', 20)); 