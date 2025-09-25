import './TituloComProps.css'

function TituloComProps(props){
    return(
        <div style={{border: '1px solid '+props.cor}}>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}

export default TituloComProps