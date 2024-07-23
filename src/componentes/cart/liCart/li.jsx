import "./li.css";
export const LiCart = ({ removeCart, removerValor, obj }) => {
  return (
    <li className="conteinerProdutoCart">
      <div className="divImg">
        <img src={obj.img} alt="" />
      </div>
      <div className="descriçãoProduct">
        <p>{obj.name}</p>
        <span>{obj.category}</span>
      </div>
      <button
        onClick={() => {
          removerValor(obj.price);
          removeCart(obj);
        }}
      >
        Remover
      </button>
    </li>
  );
};
