import "./card.css";
export const Card = ({ setCartTotal, setCurrentSale, obj }) => {
  let objeto = {
    img: obj.img,
    category: obj.category,
    name: obj.name,
    price: obj.price,
  };

  return (
    <li className="card">
      <div>
        <img className="imgCard" src={obj.img} alt="" />
      </div>
      <h4>{obj.name}</h4>
      <p>{obj.category}</p>
      <span>{`R$ ${obj.price}`}</span>
      <button
        onClick={() => {
          setCurrentSale(objeto);
          setCartTotal(obj.price);
        }}
        type="submit"
        value={obj.price}
      >
        Adicionar
      </button>
    </li>
  );
};
