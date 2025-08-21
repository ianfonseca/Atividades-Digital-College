// let contador = 0 //acumulador
// let soma = 0 //acumulador



// for (let i = 1; i<=10; i++){
//     console.log(i)
//     console.log('Repetir o loop mais uma vez')
// }

// console.log('Sair do loop')
// console.log(i)

// let x = 1

// while(x<=10){
//     console.log(x)
//     console.log('Repetir o loop mais uma vez')
//     x++
// }

// for (let num = 10; num>=1; num--){
//     console.log(num)
//     // console.log('Repetir o loop mais uma vez')
// }

// let quantidadeNumeros = 5
// let somaNumeros = 0

// Um loop for que vai ler 5 números e somar o valor de todos eles

// for (let num = 1; num<=quantidadeNumeros; num++){
//     let numeroUser = Number(prompt('Digite um número'))
//     somaNumeros += numeroUser
//     console.log(numeroUser)
    

// }
// console.log(`A soma de todos os números lidos é ${somaNumeros}`)

//atividade 2

// let qtdProdutos = Number(prompt('Digite a quantidade de produtos'))
// let somaProdutos = 0

// console.log(`A quantidade de produtos informado é ${qtdProdutos}`)

// for (let produto = 1; produto<=qtdProdutos; produto++){
//     let valorProduto = Number(prompt('Digite o valor do produto'))
//     somaProdutos += valorProduto
//     console.log(`O valor do produto informado é ${valorProduto}`)
// }

// console.log(`A soma de todos os produtos informados pelo usuário é ${somaProdutos}`)

// Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

// a qtd de vezes que o loop vai ser repetido = 5
// o que o loop vai fazer em cada repetição :  ler um valor e adicionar a somaTotal do faturamento da lojaA

//depois de finalizado o loop ( condição de parada atendida) vamos realizar o teste lógico para 2 situações
//faturamento maior (mostrar quanto a loja A faturou a mais que a loja B)
//faturamento menor (exibir uma mensagem dizendo que o faturamentonão foi maior)

// let quantidadeClientes = 5;
// let faturamentoLojaA = 0;
// let faturamentoLojaB = 54000;

// for (let quantidade = 1 ; quantidade <= quantidadeClientes ; quantidade++ ) {

//     // Mostra a quantidade de clientes que a empresa adicionou
//     console.log(quantidade)

//     // 
//     let valor = Number(prompt("Qual o valor da venda?"))
    
//     // O Faturamento da Loja A começou em 0, depois foi adicionando os valores de cada venda ao total
//     faturamentoLojaA = faturamentoLojaA + valor
// }
// // Aqui mostra o valor do total do faturamento
//     console.log(`Total da venda: R$ ${faturamentoLojaA.toFixed(2)}.`);

// if (faturamentoLojaA < faturamentoLojaB) {
//     console.log(`O faturamento da concorrente é: ${faturamentoLojaB.toFixed(2)}.\n O nosso faturamento foi: ${faturamentoLojaA}. Ainda não alcançamos a concorrente!`)
// }
// else if(faturamentoLojaA === faturamentoLojaB){
//     console.log(`O faturamento da concorrente é: ${faturamentoLojaB.toFixed(2)}.\n O nosso faturamento foi: ${faturamentoLojaA}. Alcançamos a concorrente!`)
// }
// else {
//     console.log(`O faturamento da concorrente é: ${faturamentoLojaB.toFixed(2)}.\n O nosso faturamento foi: ${faturamentoLojaA}. Ultrapassamos em ${faturamentoLojaA - faturamentoLojaB} a concorrente!`)
// }
 


