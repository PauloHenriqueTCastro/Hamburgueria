import { Card } from "./card/card";
import "./productlist.css";
export const Productlis = ({ setCartTotal, setCurrentSale, produtos }) => {
  return (
    <ul className="ulProdutos" id="ulProdutos">
      {produtos.map((obj, index) => (
        <Card
          setCartTotal={setCartTotal}
          setCurrentSale={setCurrentSale}
          key={index}
          obj={obj}
        />
      ))}
    </ul>
  );
};
