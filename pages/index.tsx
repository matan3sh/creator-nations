import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Feature } from "../components/home/Feature/Feature";
import { Footer } from "../components/layout/Footer/Footer";
import { Grid } from "../components/shared/Grid/Grid";
import { GridCards } from "../components/shared/GridCards/GridCards";
import { Section } from "../components/shared/Section/Section";
import { Contact } from "../components/home/Contact/Contact";

import { sendMessage } from "../services";
import { ContactData } from "../typings";

import {
  ourPartnersData,
  about,
  ourSupportersData,
  ourSpeakersData,
  invite,
  ourTeamData,
} from "../data";

const Home: NextPage = () => {
  const [sentSuccess, setSentSuccess] = useState(false);

  const sendContact = (values: ContactData) => {
    sendMessage(values);
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
    }, 10000);
  };

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
        <Contact onSubmit={sendContact} success={sentSuccess} />
      </main>

      <Footer />
    </>
  );
};

export default Home;
