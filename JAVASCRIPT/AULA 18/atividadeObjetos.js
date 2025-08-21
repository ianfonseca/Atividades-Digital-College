let aluno = {
    nome: 'Ian',
    idade: 20,
    curso: 'ADS',
    notas: [],
    media: undefined
}

// atribua as seguintes notas ao aluno 7,8,5 (adicione ao array)
// calcula a media (soma das notas / quantidade de notas) e atribua a propriedade média
// avalie se o valor da propriedade média é maior que 7, caso seja, crie uma propriedade chamada situação com o valor de aprovador, caso contrario crie uma propriedade chamada situação com o valor de reprovado

// adicionando as notas
aluno.notas.push(Number(prompt('Digite a primeira nota')))
aluno.notas.push(Number(prompt('Digite a segunda nota')))
aluno.notas.push(Number(prompt('Digite a terceira nota')))

console.log(aluno)

// calculando a media

let somaNotas = aluno.notas[0] + aluno.notas[1] + aluno.notas[2]
aluno.media = (somaNotas / aluno.notas.length).toFixed(2)

// verificando a situação
if (aluno.media >= 7){
    aluno.sitacao = 'Aprovado'
} else {
    aluno.sitacao = 'Reprovado'
}

for(x in aluno){
    console.log(`${x}: ${aluno[x]}`)
    
}