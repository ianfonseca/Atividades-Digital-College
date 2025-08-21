// o banco distribuiu 8 senhas. Existe uma fila de atendimento.
let atendimento = ['Ian', 'Igor', 'Lívia', 'Gerliano', 'Benvinda', 'Franklin', 'Paula', 'Camila']
// Chegando uma prioridade (Cliente Personalité passará na frente de todos os demais na ordem de chegada)

let personalite = 'Helena de Manuel Carlos'
// depois de adicionar o cliente especial, qual seria a ordem de pessoa atendida? Considerando as 8 senhas
// Imprima no console todos os nomes dos 8 atendidos. Use o loop for para isso.
// Dica: os metodos de retirada sempre retornam o elemento retirado da ista.
let clientesAtendidos = []

atendimento.unshift(personalite) //adiciona no inicio da fila
console.log(atendimento)
let qtdSenha = 8
for (let senha = 1; senha <= qtdSenha; senha++){
    let pessoaAtendida = atendimento.shift()
    clientesAtendidos.push(pessoaAtendida)
    console.log(pessoaAtendida)
}

// Armazene em um arrey os clientes na ordem que eles foram atendidos. Faça uma adaptação no código acima, para que assim que o usuario for retirado do inicio da fila de atendimento, seja adicionado ao final da lista de já atendidos

console.log(clientesAtendidos)
console.log(atendimento)