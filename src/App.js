import './App.css';
import CardComponent from './components/card';
import { GridContainer, GridItem } from './components/grid';
import NavbarComponent from './components/navbar';

import list from './products/list.json'

function App() {

  console.log(list)



  return (
    <>

      <NavbarComponent />

      <GridContainer>

        {
          list.map((item, index) => (
            <GridItem key={index} xs={12} sm={6} md={4} lg={3}>
            <CardComponent title={item.nome} description={`R$ ${item.preco} || ${item.categoria}`} buttonLabel="Comprar" />
            </GridItem>
          
          ))
        }
      </GridContainer>
    </>


  )

}

export default App;
