import Link from "next/link";
import styles from "./style.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.innerNav}>
        <Link href='/'>
          <div className={styles.logoContainer}>
            <div className={styles.square}></div>
            <div> {process.env.APP_LOGO}</div>
            <h1>{process.env.APP_NAME}</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}
