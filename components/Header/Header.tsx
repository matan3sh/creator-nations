import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <span>Creator</span>Nations
      </h1>

      <nav>
        <ul className={styles.list}>
          <li>Speaker</li>
          <li>Discord</li>
          <li>Get Early Access</li>
        </ul>
      </nav>
    </header>
  );
}
