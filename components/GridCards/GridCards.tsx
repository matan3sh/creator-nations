import styles from "./GridCards.module.css";

type Card = { name: string; image: string; role: string };

interface IProps {
  title: string;
  link: string;
  data: Card[];
}

export function GridCards({ title, data, link }: IProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.list}>
        {data.map((item, key) => (
          <div className={styles.card} key={key}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.role}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
