import classes from "./Footer.module.css";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>Verified by: <a href="https://raritysniper.com/">Rarity Sniper</a></p>
        <p>All Rights Reserved</p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
