// hannah
// arara
// civic
// radar
// osso

// crie um programa que receba uma palavra do usuario e verifique se ela é um palindromo

let palavraUser = prompt('Digite uma palavra')
let palavraInvertida = ''
let ultimoIndice = palavraUser.length

for(let i = ultimoIndice - 1; i >= 0; i--){
    palavraInvertida+= palavraUser[i]
}

if(palavraInvertida == palavraUser){
    console.log('É um palindromo')
}else{
    console.log('Não é um palindromo')
}