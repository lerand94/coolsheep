import classes from "./Socials.module.css";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import opensea from "../assets/opensea.svg";
import insta from "../assets/insta.svg";
import reddit from "../assets/reddit.svg";

const Socials = ({ column }) => {
  return (
    <ul
      className={
        !column ? classes.socials : [classes.socials, classes.column].join(" ")
      }
    >
      <li>
        <a href="https://opensea.io/collection/cool-sheep-nft" target="_blank">
          <img src={opensea} />
        </a>
      </li>
      <li>
        <a href="https://discord.gg/coolsheepnft" target="_blank">
          <img src={discord} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/CoolSheepNFT" target="_blank">
          <img src={twitter} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/coolsheepnft/" target="_blank">
          <img src={insta} />
        </a>
      </li>
      <li>
        <a href="https://www.reddit.com/user/CoolSheepNFT" target="_blank">
          <img src={reddit} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
