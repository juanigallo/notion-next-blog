export default function Heading3({ blocks }) {
  function parseAnnotations(text) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color } = annotations;

    if (italic) {
      content = <i>{content}</i>
    }

    if (bold) {
      content = <strong>{content}</strong>;
    }

    if (color) {
      content = <span className={color}>{content}</span>
    }
    return content;
  }

  return (
    <h3>{blocks.map((text) => {
      return parseAnnotations(text)
    })}</h3>
  )
}