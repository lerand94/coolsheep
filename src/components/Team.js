import classes from "./Team.module.css";
import Wrapper from "./UI/Wrapper";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";

const Team = () => {
  return (
    <section className={classes.team} id="about">
      <Wrapper>
        <h2>About Project and Team</h2>
        <div className={classes.info}>
          <p>
            The collection includes 10,000 uniquely generated cool sheep, each
            with a random background, ears, and other cute attributes. And yes,
            just look how cute they are! But oddly enough, this is not the main
            thing: by buying the NTF card of our little cool sheep, each holder
            receives land assigned to a unique sheep in our Treasure Field! And
            believe us, the name of the land is fully consistent with it!
          </p>
          <p>
            Okay, we will talk about the project for a very long time, but NFT
            cards, giveaways, airdrops and our magic land - the Treasure Field
            with a large number of NFT prizes for our dear holders is not all.
            We want you to understand that behind our project - behind our
            collection, there are people - 3 best friends, proven over the
            years, who are united by one idea, common interests, love of art, a
            sense of beauty and sweetness, a difference of skills that
            complement each other and ultimately our dear sheep. We want you to
            get to know us better, as our primary dream is to create such a
            community where we would like to write good morning with a hot cup
            of coffee in our hands or share our experiences, or, on the
            contrary, provide support.
          </p>
        </div>
        <ul className={classes.teamList}>
          <li className={classes.teamListItem}>
            <div className={classes.itemBox}>
              <img src={dev1} />
            </div>
            <p>
              Let's get to know each other - let's start with our beloved and
              dear Raven, because she is where it all began. Direct quote: boys,
              I can draw, I love everything cute, and in the end - I love sheep!
              And that's how it all started. So who is Raven? A lover of
              cuteness, a talented artist, a zoo protector, an extraordinary
              person who often dyes her hair. But all this does not prevent her
              from combining a sharp, strong intellect, extraordinary diligence,
              prudence, and the ability to make balanced correct decisions. I
              think if not for her, we would have made a lot of all different
              mistakes.
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
              Scofield - Imagine a large, stocky, bearded guy with white hair
              who cannot resist a stray kitten running by, who, by the way,
              remains to live with him in the future. Our front-end and back-end
              developer - the main profile is a react, but in general, the
              entire technical part of the project is behind him, and this must
              be given its due, because there is a lot of work here - especially
              alone (so it is better not to disturb him - after all, stroking
              cats and creating some complicated programming stuff takes a lot
              of time). And yes - it's good that no sheep are running around the
              streets - he would have sheltered them too (and Raven would not
              mind 😀)
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
              platform - be it Reddit or Twitter, or many others, you should
              know - this is all this two-meter bearded, endlessly absorbing
              coffee, polite young man, loving history, coffee and old coins.
              And yes, I almost forgot, he also drinks a lot of coffee!
              <div>
                <span className={classes.name}>Deus Vult</span>
                <span className={classes.position}>Communications</span>
              </div>
            </p>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
export default Team;
