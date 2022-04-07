import styles from "./Grid.module.css";

interface IProps {
  title: string;
  data: string[];
  link: string;
}

export function Grid({ title, data, link }: IProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.list}>
        {data.map((item, index) => (
          <img src={item} alt={`${item}_${index}`} key={item} />
        ))}
      </div>
    </div>
  );
}
