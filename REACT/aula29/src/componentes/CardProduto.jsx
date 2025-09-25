import './CardProduto.css'


function CardProduto(card){
    return(
        <div className='boxCard'>
            <img className='imgProduto' src={card.imagem} alt={card.nome} />
            <h2 className='tituloProduto'>{card.nome}</h2>
            <h3 className='precoProduto'>{card.valor}</h3>
            <p className='descricaoProduto'>{card.descricao}</p>
        </div>
    )
}

// Desapropriaçao do objeto

function Produto({img, nome, valor, descricao}){
    return(
        <div>
            <img src={imagem} alt={nome}/>
            <h2>{nome}</h2>
            <h3>{valor}</h3>
            <p>{descricao}</p>
        </div>
    )
}

export default CardProduto