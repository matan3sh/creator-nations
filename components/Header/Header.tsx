import { useEffect, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { DropDown } from "../DropDown/DropDown";

import styles from "./Header.module.css";
import { headerLinks } from "../../data";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const navOnScroll = () => {
    const currentHeight = window.innerWidth <= 720 ? 5 : 120;
    if (window.scrollY >= currentHeight) {
      setScrollNav(true);
    } else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navOnScroll);
    return () => {
      window.removeEventListener("scroll", navOnScroll);
    };
  }, []);

  return (
    <>
      <DropDown isOpen={isOpen} toggle={toggle} data={headerLinks} />

      <header
        className={styles.container}
        style={{ backgroundColor: scrollNav ? "#fff" : "transparent" }}>
        <h1 className={styles.logo}>
          <span>Creator</span>Nations
        </h1>

        <nav>
          <ul className={styles.list}>
            {headerLinks.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </nav>

        <MenuIcon className={styles.menuIcon} onClick={toggle} />
      </header>
    </>
  );
}
