import CardComponent from './components/card';
import NavbarComponent from './components/navbar';
import ButtonComponent from './components/button';
import { GridContainer, GridItem } from './components/grid';

import products from './assets/products.json'
import { useState } from 'react';

export default function App() {

  const [displayProducts, setDisplayProducts] = useState(products);
  const [productsByCategory, setProductsByCategory] = useState(products);
  const [categoryActive, setCategoryActive] = useState("");
  const [orderByPrice, setOrderByPrice] = useState("desc");

  // Removendo categorias duplicadas
  const categories = Array.from(new Set(products.map(item => item.categoria)));


  //resetando o filtro
  function resetListProducts() {
    setDisplayProducts(products);
    setProductsByCategory(products);
    setCategoryActive("");
  };

  //filtrando pelo nome
  function filterName(e) {
    e.preventDefault();
    const value = e.target.value;
    const filter = productsByCategory.filter((product) => (String(product.nome).toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    setDisplayProducts(filter);
  };


  //filtrando pela categoria
  function filterByCategory(category) {
    const filter = products.filter((product) => (product.categoria === category));
    setDisplayProducts(filter);
    setProductsByCategory(filter);
    setCategoryActive(category);
  };

  //Ordenando pelo preco
  function toogleOrderByPrice() {

    let updatedProductsByCategory = [...productsByCategory];

    if (orderByPrice === "desc") {
      const order = updatedProductsByCategory.sort((a, b) => ((a.preco) - (b.preco)));
      setDisplayProducts([...order]);
      setOrderByPrice("asc");
    } else {
      const order = updatedProductsByCategory.sort((a, b) => ((b.preco) - (a.preco)));
      setDisplayProducts([...order]);
      setOrderByPrice("desc");
    }
  };

  return (
    <>

      <NavbarComponent onChange={(e) => filterName(e)} />

      <div className="itemsCategories">
        <ButtonComponent
          onClick={() => { resetListProducts(); }}
          title="Todas" />

        {
          categories.map(category => (
            <ButtonComponent
              onClick={() => { filterByCategory(category) }}
              className={categoryActive === category && 'active'}
              title={category} />
          ))
        }
      </div>

      <div className="btnPrice">
        <ButtonComponent
          onClick={() => { toogleOrderByPrice() }}
          className={`orderByPrice ${orderByPrice}`}
          title={(orderByPrice === "desc") ? "Ordernar por produtos mais baratos" : "Ordernar por produtos mais caros"}>
        </ButtonComponent>
      </div>


      <GridContainer style={{ marginTop: "1rem" }}>

        {
          displayProducts.map((product, index) => (
            <GridItem key={index} xs={12} sm={12} md={12} lg={4}>
              <CardComponent
                title={product?.nome}
                description={`R$ ${product?.preco} || ${product?.categoria}`}
                buttonLabel="Comprar" />
            </GridItem>
          ))
        }
      </GridContainer>
    </>
  )
};
