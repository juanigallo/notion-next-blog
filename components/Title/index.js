import styles from "./style.module.scss";

export default function Title({ title }) {
  function parseAnnotations(title) {
    if (!title) return;

    let content = title.plain_text;
    const { annotations } = title;
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
    <h3 className={styles.h3}>
      {title.map((title) => {
        return parseAnnotations(title)
      })}
    </h3>
  );
}
