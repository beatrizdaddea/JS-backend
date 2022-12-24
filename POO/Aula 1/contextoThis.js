// usando o método Call()

const user = {
    nome: 'Mariana',
    email: 'm@m.com'
}

function exibeInfos() {
    console.log(this.nome, this.email)
}
   

   
exibeInfos.call(user)

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')


   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com


 
 // usando Apply() 

 function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user2 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(user2, [this.nome, this.email])
    }
   }
    user2.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com