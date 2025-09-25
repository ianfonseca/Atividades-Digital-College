function somar(a,b){
    return a + b
}

function MeuComponente() {
    
    return(
        <div>
            <h1>Meu Componente</h1>
            <p>Paragrafo que mostra um cálculo feito com JS {somar(5,2)}</p>
        </div>
    )
}

export default MeuComponente