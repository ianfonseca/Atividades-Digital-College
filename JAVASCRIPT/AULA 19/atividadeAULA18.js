//crie uma lista com 5 produtos
// cada produto será um objeto com as seguintes propriedades
//nome
//preco
//quantidade
//desconto
//definição feita pelo desenvolvedor

// definição feita pelo desenvolvedor
let produtos = [
{
    nome: 'Cadeira Gamer',
    preco: 1000,
    quantidade: 5,
    desconto: 10
},

{
    nome: 'Fone de Ouvido',
    preco: 300,
    quantidade: 8,
    desconto: 9
},

{
    nome: 'Monitor LED',
    preco: 2500,
    quantidade: 3,
    desconto: 5
},

{
    nome: 'Mouse Gamer',
    preco: 250,
    quantidade: 7,
    desconto: 10
},

{
    nome: 'Teclado Gamer',
    preco: 300,
    quantidade: 6,
    desconto: 5
}

]

// definição feita pelo usuario (todas as informações fornecidas pelo usuario)

let listaProdutos = []
for(let i = 0; i < 5; i++){
    let produto = {
    nomeProd: prompt(`Digite o nome do produto ${i+1}`),
    valor: Number(prompt(`Digite o valor do produto ${i+1}`)),
    qtd: Number(prompt(`Digite a quantidade do produto ${i+1}`)),
    desc: Number(prompt(`Digite o valor do desconto ${i+1}`))
    }
    listaProdutos.push(produto)
}

for (let i = 0; i<listaProdutos.length; i++)