import styles from "./style.module.scss";

export default function Tag({ color, name, extraClass }) {
  return <div className={`${styles.tag} ${styles[color]} ${extraClass ? styles[extraClass] : ""}`} >{name}</div>;
}
