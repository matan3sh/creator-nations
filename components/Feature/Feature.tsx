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
        <p className={styles.description}>
          Join global NFT leaders and promising Metaverse and Web3 companies
          unveiling the future trends from the world’s top Creator Nations!
        </p>
        <button className={styles.button}>Get early access</button>

        <div className={styles.partners}>
          <Image
            src="/images/feature/partners/WeDiggIT.png"
            width={235}
            height={53}
            alt="WeDiggIT"
          />
          <Image
            src="/images/feature/partners/ZenGo.png"
            width={152}
            height={53}
            alt="ZenGo"
          />
          <Image
            src="/images/feature/partners/Digital_Bank.png"
            width={112}
            height={45}
            alt="Digital_Bank"
          />
          <Image
            src="/images/feature/partners/Celsius.png"
            width={163}
            height={55}
            alt="Celsius"
          />
        </div>
      </div>
    </div>
  );
}
