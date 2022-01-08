import classes from "./Footer.module.css";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>All Rights Reserved</p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
