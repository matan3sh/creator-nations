import { Card } from "../../../typings"
import { urlFor } from "../../../sanity"
import styles from "./FeatureV1.module.css"
import { HeaderV1 } from "../../layout/HeaderV1/HeaderV1"

interface IProps {
  featurePartners: Card[]
}

export function FeatureV1({ featurePartners }: IProps) {
  return (
    <div className={styles.container} id="Feature">
      <HeaderV1 />

      <div className={styles.headline}>
        <h1 className={styles.title}>Creator</h1>
        <h2 className={styles.subtitle}>Nations</h2>

        <div>
          <div className={styles.description}>
            <span>
              A 24 hour hackathon. An initiative to battle the world&#39;s
              biggest digital challenges. We want to make an impact on the world
              with the newest Web3 technologies.
            </span>
          </div>

          <p className={styles.dateHeadline}>
            November 2th, 2023 | Global Hackathon
          </p>
        </div>

        <a
          className={styles.buttonLink}
          href="https://www.eventbrite.com/e/creator-nations-met-ams-vip-networking-event-tickets-632376544267?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get early access
        </a>

        <div className={styles.partners}>
          {featurePartners.map((partner) => (
            <img
              src={urlFor(partner.image).url()}
              alt={partner.name}
              key={partner._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
