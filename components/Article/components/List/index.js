export default function List({ blocks }) {
  function parseAnnotations(text) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color } = annotations;

    if (italic) {
      content = <i>{content}</i>;
    }

    if (bold) {
      content = <strong>{content}</strong>;
    }

    if (color) {
      content = <li className={color}>{content}</li>;
    } else {
      content = <li>{content}</li>;
    }

    return content;
  }
  return (
    <>
      {blocks.map((text) => {
        return parseAnnotations(text);
      })}
    </>
  );
}
