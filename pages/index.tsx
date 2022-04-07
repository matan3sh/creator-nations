import type { NextPage } from "next";
import Head from "next/head";

import { Feature } from "../components/Feature/Feature";
import { Footer } from "../components/Footer/Footer";
import { Grid } from "../components/Grid/Grid";
import { GridCards } from "../components/GridCards/GridCards";
import { Section } from "../components/Section/Section";

import {
  ourPartnersData,
  about,
  ourSupportersData,
  ourSpeakersData,
  invite,
  ourTeamData,
} from "../data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          CreatorNations.com - Global NFT leaders, promising Metaverse and Web3
          companies Summit
        </title>
        <meta
          name="description"
          content="Join global NFT leaders and promising Metaverse and Web3 companies unveiling the future trends from the world’s top Creator Nations!"
        />
        <meta
          name="keywords"
          content="nft, crypto bitcoin, ethereum, revolut, kraken, visa, circle"
        />
      </Head>

      <main>
        <Feature />
        <Grid data={ourPartnersData} title="Our Partners" link="Partners" />
        <Section data={about} />
        <Grid data={ourSupportersData} title="Supporters" link="Supporters" />
        <GridCards
          title="Our Speakers"
          data={ourSpeakersData}
          link="Speakers"
        />
        <Section data={invite} />
        <GridCards title="Our Team" data={ourTeamData} link="Team" />
      </main>

      <Footer />
    </>
  );
};

export default Home;
