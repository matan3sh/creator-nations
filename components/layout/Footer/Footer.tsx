import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <h2>Creator Nations &#169; 2022 copyright all right reserved</h2>

      <h3>
        <a
          href="mailto:info@coinnations.com"
          target="_blank"
          rel="noopener noreferrer">
          info@coinnations.com
        </a>
      </h3>
    </div>
  );
}
