import classes from "./HeaderNav.module.css";
// import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/mint">Mint</Link> */}
          <a href="#mint">Mint</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#sroadmap">Sales Roadmap</a>
        </li>
        <li>
          <a href="#proadmap">Project Roadmap</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
