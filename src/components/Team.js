import classes from "./Team.module.css";
import Wrapper from "./UI/Wrapper";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.png";

const Team = () => {
  return (
    <section className={classes.team} id="about">
      <Wrapper>
        <h2>About Project and Team</h2>
        <div className={classes.info}>
          <p>
            The collection includes 10,000 uniquely generated Cool Sheep, each
            with a random background, ears, and other attributes. And yes, just
            look how cute they are! We were inspired by a Cool Fam, especially
            <span className={classes.accent}> Cool Cats</span>,{" "}
            <span className={classes.accent}>Cool Dogs </span> and{" "}
            <span className={classes.accent}>Alien frens</span>. In honor of
            this, we give all the holders of Cool Cats,Cool Dogs and Alien frens a free
            mint.
          </p>
          <p>
            By buying the NTF card of our little cool sheep, each holder
            receives land assigned to a unique sheep in our Treasure Field! And
            believe us, the name of the land is fully consistent with it!
          </p>
          <p>
            We want you to understand that behind our project - behind our
            collection, there are people - 3 best friends, proven over the
            years, who are united by one idea, love of art, a sense of beauty
            and sweetness, a difference of skills that complement each other and
            ultimately our dear sheep. We want you to get to know each other
            better:
          </p>
        </div>
        <ul className={classes.teamList}>
          <li className={classes.teamListItem}>
            <div className={classes.itemBox}>
              <img src={dev1} />
            </div>
            <p>
              Let's start with our beloved and dear Raven because she is where
              it all began. Direct quote: "boys, I can draw, I love everything
              cute, and in the end - I love sheep!" And that's how it all
              started. So who is Raven? A lover of cuteness, a talented artist,
              an extraordinary person who often dyes her hair. But all this does
              not prevent her from combining a sharp, strong intellect,
              extraordinary diligence, and prudence.
              <div>
                <span className={classes.name}>Raven</span>
                <span className={classes.position}>Design Artist</span>
              </div>
            </p>
          </li>
          <li className={classes.teamListItem}>
            <div className={classes.itemBox}>
              <img src={dev2} />
            </div>
            <p>
              Imagine a large, stocky, bearded guy with white hair who cannot
              resist a stray kitten running by, who, by the way, remains to live
              with him in the future. Our front-end and back-end developer - the
              main profile is a react, the entire technical part of the project
              is behind him, and this must be given its due, because there is a
              lot of work here - especially alone.
              <div>
                <span className={classes.name}>Scofield</span>
                <span className={classes.position}>Developer</span>
              </div>
            </p>
          </li>
          <li className={classes.teamListItem}>
            <div className={classes.itemBox}>
              <img src={dev3} />
            </div>
            <p>
              Deus Vult is the person in charge of public relations so to speak.
              We would call him a marketer - but he doesn't like it, but
              remember - if you saw our project on some social network or
              platform - be it Reddit or Twitter, you should know - this is all
              this two-meter bearded, endlessly absorbing coffee, polite young
              man, loving history, coffee and old coins.
              <div>
                <span className={classes.name}>Deus Vult</span>
                <span className={classes.position}>Communications</span>
              </div>
            </p>
          </li>
          <li className={classes.teamListItem}>
            <div className={classes.itemBox}>
              <img src={dev4} />
            </div>
            <p>
              J4dan a man grew up in the age of technology spends every day
              analyzing projects around NFTs. His urge to understand the markets
              is not limited to the virtual world. This is also noticeable in
              real life. He works successfully in the consulting process for one
              of the largest banks in Europe. Fortunately, his path crossed with
              us. He is responsible for all consulting and marketing processes
              in our team.
              <div>
                <span className={classes.name}>J4dan</span>
                <span className={classes.position}>Marketing</span>
              </div>
            </p>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
export default Team;
