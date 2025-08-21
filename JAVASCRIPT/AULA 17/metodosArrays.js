let minhaLista = [1, 2, 3, 4, 5]
console.log(minhaLista)

minhaLista[minhaLista.length] = 'Novo item'
console.log(minhaLista)

// inserir um item no inicio do array

minhaLista.unshift('Primeiro item')
console.log(minhaLista)

// inserir um item no final dok array
minhaLista.push('Novo item no final do array')
console.log(minhaLista)

// remover o ultimo item do array
let removido = minhaLista.pop()
console.log(minhaLista)
console.log(removido)

// remover o primeiro item do array
let removidoPrimeiro = minhaLista.shift()
console.log(minhaLista)
console.log(removidoPrimeiro)

// crie uma lista (array) de atividades.
// O pedido ao usuario quantas atividades serao colocados na lista.
// A cada vez que o usuario digitar uma nova atividade para ser adicionada na lista, ela sempre será adicionada no começo da lista

let lista = ['andar', 'correr', 'dançar', 'pedalar', 'cantar']
lista.unshift()
let atividadesUsuarios = prompt('Digite a quantidade de atividades que deseja inserir')
for (let index = 1; index <= atividadesUsuarios; index++){
    let atividade = prompt('Digite uma atividade')
    lista.unshift(atividade) 
}
console.log(lista)