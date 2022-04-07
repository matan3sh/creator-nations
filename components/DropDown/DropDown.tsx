import CloseIcon from "@mui/icons-material/Close";
import { HeaderLinks } from "../../typings";

import styles from "./DropDown.module.css";

interface IProps {
  toggle: () => void;
  isOpen: boolean;
  data: HeaderLinks[];
}

export function DropDown({ toggle, isOpen, data }: IProps) {
  return (
    <div
      className={styles.container}
      style={{ opacity: isOpen ? "1" : "0", top: isOpen ? "0" : "-100%" }}>
      <div className={styles.icon} onClick={toggle}>
        <CloseIcon />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.menu}>
          {data.map((item) => (
            <p
              onClick={() => {
                document
                  .getElementById(item.link)
                  ?.scrollIntoView({ behavior: "smooth" });
                toggle();
              }}
              className={styles.link}
              key={item.link}>
              {item.title}
            </p>
          ))}
          <a
            className={styles.button}
            href="https://hopin.com/events/israel-crypto-week"
            target="_blank"
            rel="noopener noreferrer">
            Get Early Access
          </a>
        </div>
      </div>
    </div>
  );
}
