import classes from "./FAQ.module.css";
import img from "../assets/faq.png";

import Wrapper from "./UI/Wrapper";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQ = () => {
  return (
    <section className={classes.faq} id="faq">
      <Wrapper>
        <div className={classes.faqWrapper}>
          <h2>FAQ</h2>
          <img src={img} className={classes.faqImg} />
          <Accordion allowZeroExpanded allowMultipleExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>1) Cool Sheep? What`s this?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Cool Sheep is a generative collection of NFTs on the Ethereum
                  blockchain. The collection will consist of 10,000 uniquely
                  generated cool sheep, each with a random background, ears, and
                  other cute attributes. And yes, just look how cute they are!
                  But oddly enough, this is not the main thing: by buying the
                  NTF card of our little cool sheep, each holder receives land
                  assigned to a unique sheep in our Treasure Field! And believe
                  us, the name of the land is fully consistent with it!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>2) Hold on! What’s an NFT?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  NFTs are tokens that we can use to represent ownership of
                  unique items. They let us tokenise things like art,
                  collectibles, even real estate. They can only have one
                  official owner at a time and they're secured by the Ethereum
                  blockchain – no one can modify the record of ownership or
                  copy/paste a new NFT into existence.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>
                    3) Great, now it's clear what NFT is. Where can I buy a cool
                    sheep NFT?
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Great question! First, you must have a Metamask wallet. Let's
                  immediately answer the question of what it is: MetaMask is an
                  Ethereum based browser that you can use to interact with the
                  blockchain. It is free to use and very easy to download and
                  install. Learn more about Metamask here https://metamask.io/
                  After that, you need to go to our official website, connect
                  your wallet and press the mint button! Having a wallet gives
                  you an Ethereum address, this is where your NFT will be
                  stored.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>4) Fine! I know how, but I don't know when!</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The sale will take place in two stages - pre-sale and public
                  sale. Pre-sale will begin on February 15th, with a public sale
                  on February 17th. Only who will be whitelisted will be allowed
                  to presale. And, of course, the price is 0,05 ETH per cutie on
                  public sale and 0.04 on pre-sale
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>5) White list? how to get on the list?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Quite simple actually! There are 4 main ways to get
                  whitelisted 1) Win WL spot in our activities and giveaways 2)
                  Invite 5 people (you should use your own invite link - you can
                  check the amount in the invitations channel in our Discord) 3)
                  Make 2 tweets about Cool Sheep on Twitter (posts or
                  informative comment about our project) 4) Be active in our
                  friendly community and get level 5 - you can check the level
                  in the levels channel in our Discord too. Everyone's support
                  is very important to us!
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>6) And another question- Treasure field - more details?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  {/* The Treasure Field is a platform where the holders of our cool
                  sheep will be able to see an interactive map of 10,000 cells -
                  as many as there are sheep! 1 cell - 1 nft token, the latter
                  has the properties of X and Y. Owning a card - you have a cell
                  with certain coordinates, into which the nft cards of our
                  friends and partners will be periodically added, and if they
                  get to yours, you will receive an airdrop. You can read more
                  about the mechanism on our official website, you will also get
                  acquainted with the mechanics of tokenization and the Tao
                  system, which will subsequently fill our field of treasures. */}
                  It's calling card of our Project.
                  <br /> We are going to tell you later. Stay tuned with us.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>7) What does DAO stand for?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Decentralized autonomous organization. You should think about
                  it as a democratic voting system within the blockchain. We are
                  planning to use this system in progressing the project Based
                  on the feedback and discussions of our members in social
                  networks and chats, we will adjust the development of the
                  project. We are going to add new social mechanics and change
                  the current ones.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQ;
