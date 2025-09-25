import Logo from './assets/react.svg'
import BigKing from './assets/bigking.png'
import BigMac from './assets/bigmac.png'
import BigBob from './assets/megabigbob.png'
import './App.css'
import MeuComponente from './componentes/MeuComponente.jsx'
import TituloComProps from './componentes/TituloComProps.jsx'
import CardProduto from './componentes/CardProduto.jsx'
import Container from './componentes/Container.jsx'
import ContainerProdutos from './componentes/ContainerProdutos.jsx'
import Pai from './componentes/Pai.jsx'
import Js from '../src/assets/js.png'


function App() {
  

  return (
    // <>
    //   <img src={Logo} alt="logo react" />
    //   <MeuComponente/>
    //   <MeuComponente/>
    //   <TituloComProps titulo ="Título com Props" texto="Parágrafo com Props"/>
    //   <TituloComProps titulo ="Título com Props Secundário" texto="Parágrafo com Props Secundário" cor="red"/>

    //     <CardProduto imagem={BigKing} nome="Big King" valor="R$ 29,90" descricao="Dois deliciosos hambúrgueres grelhados no fogo como churrasco, cheddar fatiado, cebola, picles, alface e molho Big King™."/>

    //     <CardProduto imagem={BigMac} nome="Big Mac" valor="R$ 31,90" descricao="Dois hambúrgueres (100% carne bovina), alface americana, queijo processado sabor cheddar, molho especial, cebola, picles e pão com gergelim."/>
      
    //     <CardProduto imagem={BigBob} nome="Mega Big Bob" valor="R$ 34,90" descricao="Dois hambúrgueres bovinos de 117g, queijo processado sabor prato, alface e cebola fresquinhos, o inconfundível molho Big Bob original, tudo isso em um pão quentinho com gergelim. O grande clássico que todo mundo ama!"/>


  
    //   <Container>
    //     <img src={Logo} alt="" />
    //     <img src={Logo} alt="" />
    //     <img src={Logo} alt="" />
    //     <img src={Logo} alt="" />
    //   </Container>

    //   <ContainerProdutos>
        
    //     <CardProduto imagem={BigKing} nome="Big King" valor="R$ 29,90" descricao="Dois deliciosos hambúrgueres grelhados no fogo como churrasco, cheddar fatiado, cebola, picles, alface e molho Big King™."/>

    //     <CardProduto imagem={BigMac} nome="Big Mac" valor="R$ 31,90" descricao="Dois hambúrgueres (100% carne bovina), alface americana, queijo processado sabor cheddar, molho especial, cebola, picles e pão com gergelim."/>
      
    //     <CardProduto imagem={BigBob} nome="Mega Big Bob" valor="R$ 34,90" descricao="Dois hambúrgueres bovinos de 117g, queijo processado sabor prato, alface e cebola fresquinhos, o inconfundível molho Big Bob original, tudo isso em um pão quentinho com gergelim. O grande clássico que todo mundo ama!"/>

    //   </ContainerProdutos>

    //   <Pai>
        
    //   </Pai>


    

      


    // </> 

    <>
      <Pai conteudo = 'exemplo props'>
        <img src={Logo} alt="" />
        <img src={Js} alt="" />
      </Pai>

    </>
  )
}

export default App
