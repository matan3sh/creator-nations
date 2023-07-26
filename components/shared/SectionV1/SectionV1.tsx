import styles from "./SectionV1.module.css"

interface IProps {
  data: {
    color: string
    bg: string
    title: string
    subtitle: string
  }
}

export function SectionV1({ data }: IProps) {
  return (
    <div
      className={styles.container}
      style={{
        color: `${data.color}`,
        backgroundImage: `url(${data.bg})`,
      }}
    >
      <div className={styles.wrapper}>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>
    </div>
  )
}
