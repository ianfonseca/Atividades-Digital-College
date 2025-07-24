const x = 10
// Declaração e atribuição, valor de x será 10 em toda execução do programa
// constantes aceitam apenas declaração e atribuição

let y = 20
// Declaração e atribuição
// Variaveis do tipo let aceitam declaração, atribuição e retribuição
y = 30
// Retribuição (atualização de valor)

var w = "Ian"
// Variaveis do tipo var aceitam declaração, atribuição, retribuição e redeclaração
var w = "Liz"
function minhaFuncao(){
    let k = 40
    // let dentro de uma função fica restrito ao escopo da função {}
    var j = 100
    // var fica acessivel em todo escopo do programa
}

console.log( x)
console.log( y)
console.log( w)
// função que exibe as informações das variaveis no console do navegador
// objetivo de debugar a aplicação, durante o desenvolvimento e fazer comunicações com o desenvolvedor

alert(x)
// função nativa exibe as informações no navegador para o usuario e não tem retorno para o programa. Pausa o programa e aguarda o usuario confirmar o OK

y= confirm( "meu texto aqui")
console.log(y)
// função que exibe as informações no navagador como uma pergunta e da a opção para o usuario confirmar ou cancelar a pergunta. Retorna true ou false. Pausa o programa e aguarda o usuario confirmar ou cancelar a pergunta

y= prompt("Digite o seu nome")
console.log(y)
// função que exibe as informações no navagador como uma pergunta e da a opção para o usuario digitar algo. Retorna o que o usuário digitou


