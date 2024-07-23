import "./header.css";
import Logo from "./../header/componentesHeader/logo/logo.png";
import { Search } from "./componentesHeader/search/search";

export const Header = ({ setFilteredProducts, filteredProducts }) => {
  return (
    <header>
      <img src={Logo} alt="Logo Burguer Kenzie" />
      <Search
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
      />
    </header>
  );
};
