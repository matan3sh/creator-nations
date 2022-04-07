import { urlFor } from "../../../sanity";
import { Card } from "../../../typings";
import styles from "./Grid.module.css";

interface IProps {
  title: string;
  data: Card[];
  link: string;
}

export function Grid({ title, data, link }: IProps) {
  return (
    <div className={styles.container} id={link}>
      <h1>{title}</h1>
      <div className={styles.list}>
        {data.map((item) => (
          <img src={urlFor(item.image).url()} alt={item.name} key={item._id} />
        ))}
      </div>
    </div>
  );
}
