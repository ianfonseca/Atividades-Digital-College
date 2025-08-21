let frutas = ['banana', 'maca', 'laranja', 'abacaxi', 'banana', 'morango', 'banana']
// verificar se um elemento existe no array
// metodo includes
console.log(frutas.includes('banana'))
console.log(frutas.includes('uva'))
console.log(frutas.includes('morango'))

// meotodo para retornar o index do elemento procurado
console.log(frutas.indexOf('laranja'))
console.log(frutas.indexOf('uva')) //retona -1
console.log(frutas.indexOf('banana'))

// metodo para retornar o index do ultimo elemento procurado
console.log(frutas.lastIndexOf('banana'))

// contagem de quantas vezes o elemento aparece no array

let quantidade = 0
for (let index = 0; index < frutas.length; index++){
    const element = frutas[index];
    if(element == 'banana'){
        quantidade++
    }
}

// exclusao de um elemento que não está nem no inicio e nem no final do array

let numeros = [0,1,2,3,4,5,6,7,8,9]
console.log(numeros)
let removido = numeros.splice(5,2)
// array.splice(indice do inicio da remoção, quantidade de elementos a serem removidos)
console.log(numeros)
console.log(removido)
