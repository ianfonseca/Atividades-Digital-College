let pessoa1 = {
    nome: 'Ian Fonseca',
    idade: 27,
    cor: 'Branca'

}

let pessoa2 = {
    nome: 'Lívia Lima',
    idade: 27,
    cor: 'Branca'
}

// exibir todas as informações
console.log(pessoa1)
console.log(pessoa2)

// exibir o valor de uma propriedade
console.log(pessoa1.idade)
console.log(pessoa1.nome)

// atualizar o valor de uma propriedade
pessoa1.cor = 'Negro'
console.log(pessoa1.cor)

// criar uma nova informação
pessoa1.cidade = 'Capital do Ceará'
console.log(pessoa1.cidade)

// crie um objeto chamado usuario com as seguintes informações
// nome
// email
// senha
// data de nascimento
// cpf
// cargo

// depois de criado o objeto, peça ao usuario para inserir uma nova senha e atualize a senha armazenada no objeto

let usuario = {
    nome: 'Ian Fonseca Araújo',
    email: 'ianfonsecainformatica@gmail.com',
    senha: '12345678',
    dataDeNascimento: '02/06/1998',
    cpf: '039.631.403-13',
    cargo: 'Analista'
}

console.log(usuario)
usuario.senha = prompt('Digite uma nova senha')

// metodo para exclusao de uma propriedade
delete usuario.cargo
usuario.cpf = undefined
console.log(usuario)

// trazer o nome de todas as propriedades de um objeto
console.log(Object.keys(usuario))

// trazer o valor de todas as propriedades do objeto
console.log(Object.values(usuario))

 for(propriedade in usuario){
    console.log(propriedade)
    console.log(usuario[propriedade])
}