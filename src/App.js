import './App.css';
import { useState } from 'react';
import CardComponent from './components/card';
import { GridContainer, GridItem } from './components/grid';
import NavbarComponent from './components/navbar';
import products from './assets/products.json'
import ButtonComponent from './components/button';

function App() {

  const categorys = Array.from(new Set(products.map(item => item.categoria)));
  const [displayProducts, setDisplayProducts] = useState(products);
  const [productsByCategory, setProductsByCategory] = useState(products);
  const [categoryActive, setCategoryActive] = useState("");
  const [orderByPrice, setOrderByPrice] = useState("desc");


  function resetListProducts() {
    setDisplayProducts(products);
    setProductsByCategory(products);
    setCategoryActive("");
  }

  function searchName(e) {
    e.preventDefault();
    const value = e.target.value;
    const filter = productsByCategory.filter((product) => (String(product.nome).toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    setDisplayProducts(filter);
  }

  function filterByCategory(category) {
    const filter = products.filter((product) => (product.categoria === category));
    setDisplayProducts(filter);
    setProductsByCategory(filter);
    setCategoryActive(category);
  }

  function toogleOrderByPrice(){
    if(orderByPrice === "desc"){
      const order = productsByCategory.sort((a, b) => ((a.preco) - (b.preco)));
      setDisplayProducts(order);
      setOrderByPrice("asc");
    }else{
      const order = productsByCategory.sort((a, b) => ((b.preco) - (a.preco)));
      setDisplayProducts(order);
      setOrderByPrice("desc");
    }
  }



  return (
    <>
      <NavbarComponent onChange={(e) => searchName(e)} />
      
      <ButtonComponent onClick={() => { resetListProducts(); }} title="Todas"/>

      {
        categorys.map(category => (
          <ButtonComponent onClick={() => { filterByCategory(category) }} className={categoryActive === category && 'active'} title={category}/>
        ))
      }


      <br/>
      <button onClick={()=>{toogleOrderByPrice()}} className={`orderByPrice ${orderByPrice}`}>
        {
          (orderByPrice === "desc") ? "Ordernar por produtos mais baratos" : "Ordernar por produtos mais caros"
        }
      </button>



      <GridContainer style={{ marginTop: "1rem" }}>

        {
          displayProducts.map((product, index) => (
            <GridItem key={index} xs={12} sm={12} md={12} lg={4}>
              <CardComponent title={product?.nome} description={`R$ ${product?.preco} || ${product?.categoria}`} buttonLabel="Comprar" />
            </GridItem>
          ))
        }
      </GridContainer>
    </>


  )

}

export default App;
