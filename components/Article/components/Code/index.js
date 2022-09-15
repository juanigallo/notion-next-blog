import styles from './style.module.scss'
import Tag from '../../../Tag'

export default function Code({ language, blocks }) {
  function parseAnnotations(text) {
    if (!text) return;

    return text.plain_text
  }
  return (
    <div className={styles.codeContainer}>
      <div className={styles.tagContainer}>
        <Tag color="yellow" name={language} />
      </div>
      <code className={styles.code}>{blocks.map((text) => {
        return parseAnnotations(text)
      })}</code>
    </div>

  )
}