const titulo = document.querySelector('h1')
// seletor por tag
console.log(titulo.innerHTML)

const divisoes = document.querySelectorAll('div')
// seletor por classe
console.log(divisoes[0].innerHTML)

const primeiroParagrafo = document.querySelector('p')
console.log(primeiroParagrafo.innerHTML)

// seletor de classe
const primeiraDiv = document.querySelector('.divisao')
console.lo(primeiraDiv.innerHTML)

// seletor de id
const paragrafo = document.querySelector('#paragrafo')
console.lo(paragrafo.innerHTML)

// adicionando mais um elemento na div
primeiraDiv.innerHTML+= '<img src= "cao.jpg" >'

