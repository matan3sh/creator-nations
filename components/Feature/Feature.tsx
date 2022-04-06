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
      </div>
    </div>
  );
}
