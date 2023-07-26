import { useState } from "react"

import { sanityClient } from "../sanity"

import { Footer } from "../components/layout/Footer/Footer"
import { Feature } from "../components/home/Feature/Feature"
import { Contact } from "../components/home/Contact/Contact"
import { Grid } from "../components/shared/Grid/Grid"
import { GridCards } from "../components/shared/GridCards/GridCards"
import { Section } from "../components/shared/Section/Section"
import { SEO } from "../components/shared/SEO/SEO"

import { FeatureV1 } from "../components/home/FeatureV1/FeatureV1"

import { sendMessage } from "../services"
import { Card, ContactData } from "../typings"

import { about, aboutV1, doodleDay, invite } from "../data"
import { SectionV1 } from "../components/shared/SectionV1/SectionV1"

interface IProps {
  team: Card[]
  speakers: Card[]
  supporters: Card[]
  partners: Card[]
  featurePartners: Card[]
}

export default function Home({
  team,
  speakers,
  supporters,
  partners,
  featurePartners,
}: IProps) {
  const [sentSuccess, setSentSuccess] = useState(false)

  const sendContact = (values: ContactData) => {
    sendMessage(values)
    setSentSuccess(true)
    setTimeout(() => {
      setSentSuccess(false)
    }, 10000)
  }

  return (
    <>
      <SEO />

      <main>
        {/* <Feature featurePartners={featurePartners} /> */}
        <FeatureV1 featurePartners={featurePartners} />

        <Grid data={partners} title="Our Partners" link="Partners" />
        {/* <Section data={about} /> */}
        <Section data={aboutV1} />
        <Grid data={supporters} title="Supporters" link="Supporters" />
        {/* <GridCards title="Our Speakers" data={speakers} link="Speakers" /> */}
        <GridCards title="Track List" data={speakers} link="Speakers" />
        {/* <Section data={invite} /> */}
        {/* <GridCards title="Our Team" data={team} link="Team" /> */}
        <GridCards title="Emerging Technologies" data={team} link="Team" />
        <SectionV1 data={doodleDay} />

        <Contact onSubmit={sendContact} success={sentSuccess} />
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const queryTeam = `
    *[_type == "author"]{
      _id,
      name,
      image,
      title
    }
  `
  const querySpeakers = `
    *[_type == "speaker"]{
      _id,
      name,
      image,
      title
    }
  `
  const querySupporters = `
    *[_type == "supporter"]{
      _id,
      name,
      image
    }
  `
  const queryPartners = `
    *[_type == "partner"]{
      _id,
      name,
      image
    }
  `
  const queryFeaturePartners = `
    *[_type == "featurePartner"]{
      _id,
      name,
      image
    }
  `
  const speakers = await sanityClient.fetch(querySpeakers)
  const team = await sanityClient.fetch(queryTeam)
  const supporters = await sanityClient.fetch(querySupporters)
  const partners = await sanityClient.fetch(queryPartners)
  const featurePartners = await sanityClient.fetch(queryFeaturePartners)

  return {
    props: {
      speakers,
      team,
      supporters,
      partners,
      featurePartners,
    },
  }
}
