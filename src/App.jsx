import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./componentes/cart/Cart";
import { Header } from "./componentes/header/Header";
import { Productlis } from "./componentes/productlist/Productlist";
import "./reset.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function adicionarCar(btnData) {
    setCurrentSale([...currentSale, btnData]);
  }

  function adicionarValor(valor) {
    setCartTotal([parseInt(cartTotal) + parseInt(valor)]);
  }

  function removerValor(valor) {
    setCartTotal([parseInt(cartTotal) - parseInt(valor)]);
  }

  function removeCart(cardCart) {
    const newCardCart = currentSale.filter((cart) => cart !== cardCart);
    setCurrentSale(newCardCart);
  }

  const newListaProdutos = products.filter((produto) =>
    produto.name.toLowerCase().includes(filteredProducts.toLowerCase())
  );

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="Conteiner">
        <Productlis
          currentSale={currentSale}
          setCurrentSale={adicionarCar}
          produtos={newListaProdutos}
          setCartTotal={adicionarValor}
        />
        <Cart
          removeCart={removeCart}
          removerValor={removerValor}
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCurrentSale={setCurrentSale}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;
