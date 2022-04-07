import Image from "next/image";

import { Header } from "../Header/Header";

import styles from "./Feature.module.css";

export function Feature() {
  return (
    <div className={styles.container}>
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
          <img src="/images/feature/partners/WeDiggIT.png" alt="WeDiggIT" />
          <img src="/images/feature/partners/ZenGo.png" alt="ZenGo" />
          <img
            src="/images/feature/partners/Digital_Bank.png"
            alt="Digital_Bank"
          />
          <img src="/images/feature/partners/Celsius.png" alt="Celsius" />
        </div>
      </div>
    </div>
  );
}
