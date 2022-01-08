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
                {/* Мы хотим представить вам визитную карточку нашего проекта - это
                карта сокровищ. Это площадка где холдеры могут увидеть
                интерактивную карту где 1 ячейка = 1 нфт. Каждый нфт токен имеет
                свойства X и Y которые являются координатами нахождения токена
                на карте. На карте будет размещаться нфт токены в ячейки
                (например 1 нфт в 1 ячейке, или 1 нфт в 4 ячейках 2х2 или очень
                редкие нфт в 25 ячейках 5х5).Если Холдер владеет всей зоной
                ячеек он полочит трансфер с кошелька карты. Если Группа холдеров
                владеет зоной где лежит редкая нфт, разработчики предлагают либо
                раздать в ефирах каждому % от долей владений ячеек. В случае
                если группа холдеров не прийдет к консессусу раздачи, то редкая
                карточка останется на карте до либо согласия холдеров на раздачу
                либо до полного владение зоной Раз в месяц карта будет полностью
                расщишаться или после 100% заполнения и все холдеры получат нфт.
                На карту будут попадать нфт карточки с коллабораций с нашей
                коллекцией либо с фонда коллекции будут покупаться нфт токены
                разных коллеций или несколько дорогих нфт и заполнять карту
                Роялти 10% будет распределены так: 5% для DAO , 2.5% для Фонда
                для карты , 2.5% для команды разработчиков */}
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
                {/* Мы хотим создать теплое и приятное сообщество активных
                участников для продвижение проекта и его развития в будущем. У
                Дао сообщества будет свой кошелек куда мы отправим средства для
                того , чтобы сообщество могло решить куда их тратить , то ли на
                покупку редких нфт то ли на любые пожелание которое решит
                сообщество. У ДАО будут выбраны лидеры сообщества для Мультисиг
                контроля , девы отдадут все права на этот кошелек.  */}
                We want to create a cozy and pleasant community of active
                participants for the grow up of the project and its development
                in the future. The DAO wallet will be accumulate royalties from
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
                DAO community’s vault. We purpose $WOOL as a reward in different
                contests in discord. $WOOL will be able to trade on SushiSwap.
                To get $WOOL you need to stake it. 5 $WOOL per day.
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
