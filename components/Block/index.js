import Code from "../Article/components/Code";
import Heading1 from "../Article/components/Heading1";
import Heading2 from "../Article/components/Heading2";
import Heading3 from "../Article/components/Heading3";
import Image from "../Article/components/Image";
import List from "../Article/components/List";
import Paragraph from "../Article/components/Paragraph";

export default function Block({ data }) {
  function handleBlock(blockData) {
    const { type } = blockData;

    const types = {
      paragraph: (paragraph) => <Paragraph blocks={paragraph.rich_text} />,
      code: (code) => <Code language={code.language} blocks={code.rich_text} />,
      heading_1: (heading) => <Heading1 blocks={heading.rich_text} />,
      heading_2: (heading) => <Heading2 blocks={heading.rich_text} />,
      heading_3: (heading) => <Heading3 blocks={heading.rich_text} />,
      bulleted_list_item: (listItem) => <List blocks={listItem.rich_text} />,
      image: (image) => <Image url={image.file.url} />
    };

    return types[type] ? types[type](blockData[type]) : "";
  }
  return <>{handleBlock(data)}</>;
}
