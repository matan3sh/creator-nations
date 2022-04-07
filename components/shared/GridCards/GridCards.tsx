import { urlFor } from "../../../sanity";
import { Card } from "../../../typings";
import styles from "./GridCards.module.css";

interface IProps {
  title: string;
  link: string;
  data: Card[];
}

export function GridCards({ title, data, link }: IProps) {
  return (
    <div className={styles.container} id={link}>
      <h1>{title}</h1>

      <div className={styles.list}>
        {data.map((item) => (
          <div className={styles.card} key={item._id}>
            <img src={urlFor(item.image).url()} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
