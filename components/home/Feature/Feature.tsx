import { Header } from "../../layout/Header/Header";
import { Card } from "../../../typings";
import { urlFor } from "../../../sanity";
import styles from "./Feature.module.css";

interface IProps {
  featurePartners: Card[];
}

export function Feature({ featurePartners }: IProps) {
  return (
    <div className={styles.container} id="Feature">
      <Header />

      <div className={styles.headline}>
        <h1 className={styles.title}>Creator</h1>
        <h2 className={styles.subtitle}>Nations</h2>
        <img
          className={styles.mainLogo}
          src="/images/feature/NFT_Unicorn.png"
          alt="NFT_Unicorn"
        />
        <p className={styles.description}>
          Join global NFT leaders and promising Metaverse and Web3 companies
          unveiling the future trends from the world’s top Creator Nations!
        </p>

        <button className={styles.button}>Get early access</button>

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
  );
}
