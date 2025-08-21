let numero = 22
console.log(`O valor da variavel número é ${numero}`)

let pessoa = ['Ian', 'Loiro', 27, 'Cearense', numero, true]
console.log(pessoa[4])
console.log(`A idade do ${pessoa[0]} é ${pessoa[2]} anos`)

// Crie um array com nome, e-mail, e nome de usuario para suas credencias do github
// mostre todas essas informações no console no seguinte formato
// Nome: variavel[indice que armazena o nome]
// E-mail: variavel[indice que armazena o email]
// variavel[indice que armazena o nome de usuario]

let github = ['Ian Fonseca Araújo', 'ianfonsecainformatica@gmail.com', 'ianfonseca']

console.log(`Nome: ${github[0]}`)
console.log(`E-mail: ${github[1]}`)
console.log(`Usuário: ${github[2]}`)

// Atualizando o nome
github[0] = 'Lívia Lima Xavier'
github[20] = 'Nova informação adicionada por indice'
console.log(`O novo nome é: ${github[0]}`)
console.log(github)

github[10] = 'teste'
console.log(github)

// Um onibius tem:
// 1 porta
// 24 janelas
// 42 bancos
// 8 rodas

// Crie uma variavel que armazenas as informações do onibus
// Atualize a informação da quantidade de portas para 2 
// insira mais uma informação: placa 'HHH-123'

let onibius = ['1 porta', '24 janelas', '42 bancos', '8 rodas']
console.log(onibius)

onibius[0] = '2 portas'

onibius[onibius.length] = 'HHH-123'
console.log(onibius)