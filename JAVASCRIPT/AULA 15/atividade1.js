// imprima e some todos os números do intervalo de 0 a 50

let iterador = 0 // numero que vai variar de 0 a 50
let acumulador = 0 // soma dos números do intervalo de 0 a 50
let fimIntervalo = 50

while(iterador <= fimIntervalo){
    console.log(iterador)
    // somar o valor atual do interador ao acumulador
    acumulador += iterador
    // atualização da condição para que o loop se repita
    iterador++
    
}
