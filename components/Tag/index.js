import styles from "./style.module.scss";

export default function Tag({ color, name }) {
  return <div className={`${styles.tag} ${styles[color]}`} >{name}</div>;
}
