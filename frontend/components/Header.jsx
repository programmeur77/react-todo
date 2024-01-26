import { ImCheckboxChecked } from "react-icons/im";

import "./../style/components/header.scss";

const Header = () => {
  return (
    <header className="header">
      <ImCheckboxChecked className="header__logo" />
      <h1 className="header__app-name">Todo App</h1>
    </header>
  );
};

export default Header;
