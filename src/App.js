import { useEffect, useState } from 'react';
import './App.css';
import CardComponent from './components/card';
import { GridContainer, GridItem } from './components/grid';
import NavbarComponent from './components/navbar';

import list from './products/list.json'

function App() {

  const categoriasUnicas = [...new Set(list.map(item => item.categoria))];
  const [produtos, setProdutos] = useState([]);
  const [produtosExibidos, setProdutosEXibidos] = useState([]);





  function searchName(e){
    e.preventDefault();
    const value = e.target.value;
    const filter = list.filter((item) => (String(item.nome).toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    setProdutosEXibidos(filter)
}

function searchCategory(e){
  e.preventDefault();
  const value = e.target.value;
  const filter = list.filter((item) => (String(item.nome).toLocaleLowerCase().includes(value.toLocaleLowerCase())))
  setProdutosEXibidos(filter)
}




  return (
    <>

      <NavbarComponent onChange={(e) => searchName(e)}/>


      <GridContainer style={{marginTop:"10rem"}}>

        {
          produtosExibidos.map((item, index) => (
            <GridItem key={index} xs={12} sm={12} md={12} lg={4}>
            <CardComponent title={item?.nome} description={`R$ ${item?.preco} || ${item?.categoria}`} buttonLabel="Comprar" />
            </GridItem>
          
          ))
        }
      </GridContainer>
    </>


  )

}

export default App;
