import { useState } from "react";

import { sanityClient } from "../sanity";

import { Footer } from "../components/layout/Footer/Footer";
import { Feature } from "../components/home/Feature/Feature";
import { Contact } from "../components/home/Contact/Contact";
import { Grid } from "../components/shared/Grid/Grid";
import { GridCards } from "../components/shared/GridCards/GridCards";
import { Section } from "../components/shared/Section/Section";
import { SEO } from "../components/shared/SEO/SEO";

import { sendMessage } from "../services";
import { Card, ContactData } from "../typings";

import { about, invite } from "../data";

interface IProps {
  team: Card[];
  speakers: Card[];
  supporters: Card[];
  partners: Card[];
  featurePartners: Card[];
}

export default function Home({
  team,
  speakers,
  supporters,
  partners,
  featurePartners,
}: IProps) {
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
      <SEO />

      <main>
        <Feature featurePartners={featurePartners} />
        <Grid data={partners} title="Our Partners" link="Partners" />
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
  const queryPartners = `
    *[_type == "partner"]{
      _id,
      name,
      image
    }
  `;
  const queryFeaturePartners = `
    *[_type == "featurePartner"]{
      _id,
      name,
      image
    }
  `;
  const speakers = await sanityClient.fetch(querySpeakers);
  const team = await sanityClient.fetch(queryTeam);
  const supporters = await sanityClient.fetch(querySupporters);
  const partners = await sanityClient.fetch(queryPartners);
  const featurePartners = await sanityClient.fetch(queryFeaturePartners);

  return {
    props: {
      speakers,
      team,
      supporters,
      partners,
      featurePartners,
    },
  };
};
