import classes from "./ProjectRoadmap.module.css";
import Wrapper from "./UI/Wrapper";

import img from "../assets/roadmap.gif";

const ProjectRoadmap = () => {
  return (
    <Wrapper>
      <div className={classes.roadmap} id="proadmap">
        <img src={img} className={classes.img} />
        <div className={classes.roadmapBox}>
          <h2>Project Roadmap</h2>
          <ul>
            <li>
              <div className={classes.title}>
                <div className={classes.ico3}></div>
                <h3>Treasure Field</h3>
              </div>

              <p>

                It's calling card of our Project.
                <br /> We are going to tell you later. Stay tuned with us.
              </p>
            </li>
            <li>
              <div className={classes.title}>
                <div className={classes.ico1}></div>
                <h3>DAO</h3>
              </div>

              <p>
                We want to create a friendly and pleasant community of active
                participants for the grow up of the project and its development
                in the future.
                <br /> The DAO wallet will be accumulate royalties from
                secondary sales which are then used to purchase Blue Chip NFTs
                in the fractionalized vault and DAO-led initiatives.
              </p>
            </li>
            <li>
              <div className={classes.title}>
                <div className={classes.ico2}></div>
                <h3>Тoken launch</h3>
              </div>

              <p>
                {/* Мы запустим токен $WOOL для фрактального владения нфт банком ДАО
                сообщества и для внутренней валюты для сообщества. Для гивевеев
                или для конкурсов сообщества и как оплату для модератов и любого
                структуры иерархии в ДАО , а также для будешей токеномики в
                проекте (бридинг ?) */}
                We are going to launch token $WOOL for fractional shares of the
                DAO community’s vault.
                <br /> We purpose $WOOL as a reward in different contests in
                discord. $WOOL will be able to trade on SushiSwap. To get $WOOL
                you need to stake it. 1 $WOOL per day. 1 Sheep = 1 WOOL
                <br /> And with help of community votes, we'll decide how we can
                use it. Maybe for breeding?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectRoadmap;
