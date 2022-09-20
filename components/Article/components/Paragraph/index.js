export default function Paragraph({ blocks }) {
  function parseAnnotations(text) {
    if (!text) return;

    let content = text.plain_text;
    const { annotations } = text;
    const { bold, italic, color, underline } = annotations;

    if (italic) {
      content = <i>{content}</i>;
    }

    if (bold) {
      content = <strong>{content}</strong>;
    }

    if (underline) {
      content = <u>{content}</u>;
    }

    if (text.href) {
      content = <a href={text.href} className={color == 'default' ? "blue" : color}>{content}</a>;
      return content;
    }

    if (color) {
      content = <span className={color}>{content}</span>;
    }


    return content;
  }

  return (
    <p>
      {blocks.map((text) => {
        return parseAnnotations(text);
      })}
    </p>
  );
}
