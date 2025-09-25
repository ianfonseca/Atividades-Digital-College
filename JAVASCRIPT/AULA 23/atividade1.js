// crie uma pagia com um titulo e através da execução de um script peça o nome do usuário e troque pelo conteudo do titulo

// document.getElementsByTagName
// elemento.innerHTML

let titulos = document.getElementsByTagName('h1')
let usuario = prompt('Digite o nome do usuário')

titulos[0].innerHTML = usuario


// o array de elementos será uma variavel global para que possa ser acessado dentro da função

let listaClasseAtividade = document.getElementsByClassName('atividade')

function atividade2While(arrayElementosComClasse){
    let i = 0

    // o loop repetido até o final do array de elementos

    let tamanho = arrayElementosComClasse.length

    // acessar o elemento pelo indice e manipular a propriedade

    while (i < tamanho){
        arrayElementosComClasse[i].style.color = 'red'
        i++
    }


}

function atividade2For(arrayElementosComClasse){
    let tamanho = arrayElementosComClasse.length
    for (let i = 0; i < tamanho; i++){
        arrayElementosComClasse[i].style.color = 'red'
    }
}

function atividade2ForEach(arrayElementosComClasse){
    arrayElementosComClasse.forEach(element => {
        element.style.color = 'red'
        
    });
}

atividade2ForEach([...listaClasseAtividade])

//selecione o objeto com id 'importante' (getElementById) e altere o html interno a tag selecionada e aplique o conteúdo de texto passado pelo prompt dentro de uma tag strong
//peça ao usuario um texto
//seleciona o objeto com id 'importante'
//altera o html interno da tag selecionada usando innerHTML
// insira um strong e dentro dele insira o texto digitado pelo usuario

let usuario1 = prompt('Digite um texto:')
let objeto = document.getElementById('importante')
objeto.innerHTML = `<strong>${usuario1}</strong>`

let minhaLista = document.getElementById('minhaLista')
// um objerto html

// adicionar 5 itens a minha lista
minhaLista.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
`


// crie uma tag ol no html e adicione um ID
// selecione esse objeto e paça a adição de 5 itens passados pelo usuário para serem renderizados na tela como itens numeral

let lista = document.getElementById('1')
let quantidade = 5

for (let index = 0; lista < quantidade; index++) {
    let item = prompt('Digite o nome de um item')
    lista.innerHTML+= `<li>${item}</li>`
}