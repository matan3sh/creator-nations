import { useState } from "react";
import Head from "next/head";

import { sanityClient } from "../sanity";

import { Feature } from "../components/home/Feature/Feature";
import { Footer } from "../components/layout/Footer/Footer";
import { Grid } from "../components/shared/Grid/Grid";
import { GridCards } from "../components/shared/GridCards/GridCards";
import { Section } from "../components/shared/Section/Section";
import { Contact } from "../components/home/Contact/Contact";

import { sendMessage } from "../services";
import { Card, ContactData } from "../typings";

import { ourPartnersData, about, ourSupportersData, invite } from "../data";

interface IProps {
  team: Card[];
  speakers: Card[];
  supporters: Card[];
}

export default function Home({ team, speakers, supporters }: IProps) {
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
        {/* <Grid data={ourPartnersData} title="Our Partners" link="Partners" /> */}
        <Section data={about} />
        <Grid data={supporters} title="Supporters" link="Supporters" />
        <GridCards title="Our Speakers" data={speakers} link="Speakers" />
        <Section data={invite} />
        <GridCards title="Our Team" data={team} link="Team" />
        <Contact onSubmit={sendContact} success={sentSuccess} />
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const queryTeam = `
    *[_type == "author"]{
      _id,
      name,
      image,
      title
    }
  `;
  const querySpeakers = `
    *[_type == "speaker"]{
      _id,
      name,
      image,
      title
    }
  `;
  const querySupporters = `
    *[_type == "supporter"]{
      _id,
      name,
      image
    }
  `;
  const speakers = await sanityClient.fetch(querySpeakers);
  const team = await sanityClient.fetch(queryTeam);
  const supporters = await sanityClient.fetch(querySupporters);

  return {
    props: {
      speakers,
      team,
      supporters,
    },
  };
};
