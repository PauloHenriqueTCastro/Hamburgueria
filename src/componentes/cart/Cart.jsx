import { useState } from "react";
import "./cart.css";
import { LiCart } from "./liCart/li";
export const Cart = ({
  removeCart,
  removerValor,
  cartTotal,
  currentSale,
  setCurrentSale,
  setCartTotal,
}) => {
  const [algumaCoisaDentro, setAlgumaCoisaDentro] = useState(true);

  console.log(currentSale.length);

  // function algoDentro() {
  //   if (currentSale.length === 0) {
  //     setAlgumaCoisaDentro(false);
  //   } else {
  //     setAlgumaCoisaDentro(true);
  //   }
  // }

  return (
    <div className="Cart">
      <div className="headerCart">
        <p>Carrinho de Compras</p>
      </div>
      {algumaCoisaDentro ? (
        <>
          <ul
            // onChange={() => algoDentro()}
            className="ulMaeCart"
            id="ulMaeCart"
          >
            {currentSale.map((obj, index) => (
              <LiCart
                removeCart={removeCart}
                removerValor={removerValor}
                key={index}
                obj={obj}
              />
            ))}
          </ul>
          <div className="linhaSpan"></div>
          <div className="conteinerVtotal">
            <span>Total</span>
            <p>R$ {cartTotal}</p>
          </div>
          <button
            onClick={() => {
              setAlgumaCoisaDentro(false);
              setCurrentSale([]);
              setCartTotal(0);
            }}
            className="btnRemoverTudoCarrinho"
          >
            Remover todos
          </button>
        </>
      ) : (
        <>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </>
      )}
    </div>
  );
};
