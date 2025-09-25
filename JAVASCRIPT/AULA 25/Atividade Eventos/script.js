let botaoVermelho = document.querySelector('#vermelho')
let botaoAzul = document.querySelector('#azul')
let botaoVerde = document.querySelector('#verde')
let lousa = document.querySelector('.divLousa')




function red (){
    lousa.style.backgroundColor = 'red'
    console.log('vermelho')
}

function blue (){
    lousa.style.backgroundColor = 'blue'
    console.log('azul')
}

function green (){
    lousa.style.backgroundColor = 'green'
    console.log('verde')
}

function resetar(){
    lousa.style.backgroundColor = 'rgb(233, 227, 227)'
}

function trocarTexto(){
    let titulo = document.querySelector('h1')
    titulo.innerHTML = 'Mudei'
}