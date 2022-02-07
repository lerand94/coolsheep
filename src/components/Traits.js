import classes from "./Traits.module.css";

import sneek1 from '../assets/sneek1.png'
import sneek2 from '../assets/sneek2.png'
import sneek3 from '../assets/sneek3.png'
import sneek4 from '../assets/sneek4.png'
import sneek5 from '../assets/sneek5.png'
import sneek6 from '../assets/sneek6.png'
import sneek7 from '../assets/sneek7.png'
import sneek8 from '../assets/sneek8.png'
import video from '../assets/demo.mp4'

import Wrapper from "./UI/Wrapper";

const Traits = () => {

  return (
    <Wrapper>
    <ul className={classes.traitsBox}>
        <li className={classes.traitItem}>
            <img src={sneek1}/>
            <p>Cozy</p>
            <div>
                <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance1,classes.chance].join(' ')}>30%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek2}/>
            <p>Uncommon</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance2,classes.chance].join(' ')}>20%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek3}/>
            <p>Happiness</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance3,classes.chance].join(' ')}>17%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek4}/>
            <p>Rare</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance4,classes.chance].join(' ')}>13%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek5}/>
            <p>Energy</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance5,classes.chance].join(' ')}>10%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek6}/>
            <p>Soft</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance6,classes.chance].join(' ')}>7%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek7}/>
            <p>Juicy</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance7,classes.chance].join(' ')}>2%</span>
            </div>
        </li>
        <li className={classes.traitItem}>
            <img src={sneek8}/>
            <p>Elite</p>
            <div>
            <span className={classes.chanceText}>Chance</span>
                <span className={[classes.chance8,classes.chance].join(' ')}>1%</span>
            </div>
        </li>
    </ul>
    <div>
        <video autoPlay muted loop className={classes.video}>
            <source src={video} type='video/mp4'></source>
        </video>
    </div>
    </Wrapper>
  );
};

export default Traits;
