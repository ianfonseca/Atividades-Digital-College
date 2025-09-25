import './ContainerProdutos.css'

function ContainerProdutos(props){
    return(
        <div className='boxProdutos'>
            {props.children}

        </div>

    )
}

export default ContainerProdutos
