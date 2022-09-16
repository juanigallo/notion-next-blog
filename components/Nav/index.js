import styles from './style.module.scss'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.innerNav}>
        <div className={styles.square}></div>
        <h1>Juani Gallo</h1>
      </div>
    </nav>
  )
}