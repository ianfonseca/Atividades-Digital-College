// componente que espera receber interno a ele filhos, no sentido de agrupar e estilizar os filhos


function Container(props){
    return(
        <div style={{border: '1px solid black', padding: '10px', margin:'10px', backgroundColor:'lightblue', display:'flex', justifyContent:'center'}}>
            {props.children}
        </div>
    )

}

export default Container