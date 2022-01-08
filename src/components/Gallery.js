import classes from "./Gallery.module.css";
import Wrapper from "./UI/Wrapper";

const Gallery = () => {
  return (
    <div className={classes.wall}>
      <Wrapper>
        <div className={classes.preview}>
          <div className={classes.card}>
            <div
              className={[classes.cardPart, classes.cardPartOne].join(" ")}
            ></div>
            <div
              className={[classes.cardPart, classes.cardPartTwo].join(" ")}
            ></div>
            <div
              className={[classes.cardPart, classes.cardPartThree].join(" ")}
            ></div>
            <div
              className={[classes.cardPart, classes.cardPartFour].join(" ")}
            ></div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Gallery;
