const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

   // nesse caso o personagem original é alterado 
    // const objPersonagem2 = objPersonagem
    // objPersonagem2.nome = "Gandalf, o Cinzento"

    // console.log(objPersonagem.nome) //Gandalf, o Cinzento
    // console.log(objPersonagem2.nome) //Gandalf, o Cinzento

   // nesse caso será criado um novo objeto com instancia diferente 
    const objPersonagem3 = Object.create(objPersonagem)
    objPersonagem3.nome = "Gandalf, o Cinzento"
    
    console.log(objPersonagem.nome) //Gandalf
    console.log(objPersonagem3.nome) //Gandalf, o Cinzento

