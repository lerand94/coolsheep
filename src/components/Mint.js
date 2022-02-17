import classes from "./Mint.module.css";
import Wrapper from "./UI/Wrapper";

import { useEffect,useState } from "react";
import Timer from "./Timer";
import Socials from "./Socials";

import gif from "../assets/gif.gif";

import { useStore } from "effector-react";
import { $contractSaleActive, $supply, giftFx, mintFx } from "../stores/web3";

const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);

  const supply = useStore($supply);
  const isSaleAcitve = useStore($contractSaleActive);
  const isMintPending = useStore(mintFx.pending);
  const isGiftPending = useStore(giftFx.pending);

  const mint = () => {
    mintFx(mintAmount);
  };

  const gift = () => {
    giftFx();
  };

  const mintAmountHandler = (event) => {
    setMintAmount(event.target.value);
  };
  return (
    <Wrapper>
      <div className={classes.mint} id="mint">
        <div className={classes.left}>
          <h1>
            <span>10000</span>
            <span>Unique Cool Sheep</span>
          </h1>
          <p>
            FREE mint for <span className={classes.accent}>Cool Cats</span>,{" "}
            <span className={classes.accent}>Cool Dogs</span> and
            <span className={classes.accent}> Alien frens</span>
          </p>
          <p className={classes.desc}>Choose a quantity to mint</p>
          <div className={classes.sliderBox}>
            <input
              type="range"
              min="1"
              max={20}
              step="1"
              value={mintAmount}
              onChange={mintAmountHandler}
              className={classes.slider}
            />
            <span
              className={classes.mintValue}
              style={{
                left:
                  mintAmount >= 20
                    ? "98%"
                    : `${mintAmount == 1 ? 2 * mintAmount : 5 * mintAmount}%`,
                transform:
                  mintAmount >= 20
                    ? "translateX(-98%)"
                    : `translateX(-${
                        mintAmount == 1 ? 2 * mintAmount : 5 * mintAmount
                      }%)`,
              }}
            >
              {mintAmount}
            </span>
          </div>
          <div className={classes.btnGroup}>
            <button
              className={classes.mintButton}
              onClick={mint}
              disabled={!isSaleAcitve || isMintPending}
            >
              Mint
            </button>
            <div className={classes.text}>
              <span>Minted:</span>
              <span>{supply.total} / 10000</span>
            </div>
            <button
              className={classes.mintButton}
              onClick={gift}
              disabled={!isSaleAcitve || isGiftPending}
            >
              Free mint
            </button>
          </div>
          {/* <p className={classes.soon}>Coming Soon</p> */}
        </div>
        <div className={classes.right}>
          <img className={classes.gif} src={gif} />
          <Timer />
        </div>

        <Socials column={true} />
      </div>
    </Wrapper>
  );
};

export default Mint;
