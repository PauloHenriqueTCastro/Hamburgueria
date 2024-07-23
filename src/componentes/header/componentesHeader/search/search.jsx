import "./search.css";
export const Search = ({ setFilteredProducts, filteredProducts }) => {
  return (
    <div className="conteinreSearch">
      <input
        value={filteredProducts}
        onChange={(ev) => setFilteredProducts(ev.target.value)}
        id="inputSearch"
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <button>Pesquisar</button>
    </div>
  );
};
