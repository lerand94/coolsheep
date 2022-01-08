import Wrapper from "./UI/Wrapper";
import HeaderNav from "./HeaderNav";
import ConnectButton from "./ConnectButton";
import classes from "./Header.module.css";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.headerBox}>
          <img src={logo} className={classes.logo} />
          <HeaderNav />
          <ConnectButton />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
