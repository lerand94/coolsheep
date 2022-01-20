import classes from "./Timer.module.css";
import { useEffect, useState } from "react";

const calculateTime = (targetDate) => {
  const difference = +targetDate - +new Date();
  const padNumber = (num) => num.toString().padStart(2, "0");

  if (difference > 0) {
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    // return `${padNumber(days)}d:${padNumber(hours)}h:${padNumber(
    //   minutes
    // )}m:${padNumber(seconds)}s`;
    return {
      days: padNumber(days),
      hours: padNumber(hours),
      minutes: padNumber(minutes),
      seconds: padNumber(seconds),
    };
  }

  return { soon: "Starting soon" };
};

const Timer = () => {
  const targetDate = new Date("2022-02-17T20:59:59.000Z");
  const [timeLeft, setTimeLeft] = useState(calculateTime(targetDate));
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTime(targetDate));
    }, 1000);
  }, [timeLeft]);

  return (
    <>
      <div className={classes.timer}>
        {/* <div className={classes.day}>
        <span className={classes.dayNum}>{timeLeft.days}</span>{" "}
        <span className={classes.dayText}>Days</span>
      </div>
      <div className={classes.other}>
        <span className={classes.otherNum}>
          {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
        </span>
        <div className={classes.otherText}>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div> */}
        <h3>The public sale will be available in</h3>
        <ul>
          <li>
            <span className={classes.dayNum}>{timeLeft.days}</span>
            <span className={classes.dayText}>Days</span>
          </li>
          <li>
            <span className={classes.dayNum}>{timeLeft.hours}</span>
            <span className={classes.dayText}>Hours</span>
          </li>
          <li>
            <span className={classes.dayNum}>{timeLeft.minutes}</span>
            <span className={classes.dayText}>Mins</span>
          </li>
          <li>
            <span className={classes.dayNum}>{timeLeft.seconds}</span>
            <span className={classes.dayText}>Secs</span>
          </li>
        </ul>
      </div>
      <p>Pre-sale: 15th February</p>
      <p>Price: 0.02 ETH</p>
    </>
  );
};

export default Timer;
