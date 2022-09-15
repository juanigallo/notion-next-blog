import styles from './style.module.scss'

export default function Description({ text }) {
  function parseAnnotations(text) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic } = annotations;

    if (italic) {
      content = <i>{content}</i>
    }

    if (bold) {
      content = <strong>{content}</strong>;
    }
    return content;
  }

  return (
    <p className={styles.p}>{text.map((textEntry) => {
      return parseAnnotations(textEntry)
    })}</p>
  )
}