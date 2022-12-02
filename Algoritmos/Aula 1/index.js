const livros = require('./listaLivros');

let maisBarato = 0;
let maisCaro = 0;


for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual
  }
}

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco > livros[maisCaro].preco) {
    maisCaro = atual;
  }
 }

console.log(`o livro mais barato custa R$ ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)

console.log(`o livro mais caro custa R$ ${livros[maisCaro].preco} e o título é ${livros[maisCaro].titulo}`)