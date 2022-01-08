import classes from "./Roadmap.module.css";
import Wrapper from "./UI/Wrapper";

const Roadmap = () => {
  return (
    <Wrapper>
      <div className={classes.roadmap} id="sroadmap">
        <div className={classes.roadmapBox}>
          <h2>Sales Roadmap</h2>
          <ul>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBoxFirst].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>10%</span>
              <span className={classes.text}>
                The collection will be listed in Rarity Tools / Rarity Sniper
                <br />
                and Holder Giveaway (3 Cool Sheep)
              </span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBox2].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>20%</span>
              <span className={classes.text}>
                Holders NFT Giveaway (7 Cool Sheep)
              </span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBox3].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>30%</span>
              <span className={classes.text}>Holders ETH Giveaway (3 ETH)</span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBox4].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>50%</span>
              <span className={classes.text}>
                Transfer 25 ETH to Treasure Field wallet
              </span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBox5].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>60%</span>
              <span className={classes.text}>
                Launch Online Charity Merch shop
              </span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBox6].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>75%</span>
              <span className={classes.text}>
                Transfer 25 ETH to DAO wallet for purchase Blue Chip.
              </span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBox7].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>90%</span>
              <span className={classes.text}>
                Airdrop Custom unique NFT 1/1 to Top Holders
              </span>
            </li>
            <li className={classes.roadStep}>
              <div
                className={[classes.colorBox, classes.colorBoxLast].join(" ")}
              ></div>
              <div className={classes.next}></div>
              <span className={classes.num}>100%</span>
              <span className={classes.text}>
                Transfer 50 ETH to Treasure Field wallet and 50 ETH to DAO
                wallet
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Roadmap;
