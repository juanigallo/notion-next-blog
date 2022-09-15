import Code from "../Article/components/Code"
import Paragraph from "../Article/components/Paragraph"

export default function Block({ data }) {
  function handleBlock(blockData) {
    const { type } = blockData
    const types = {
      paragraph: (paragraph) => <Paragraph blocks={paragraph.rich_text} />,
      code: (code) => <Code language={code.language} blocks={code.rich_text} />
    }

    return types[type] ? types[type](blockData[type]) : ""
  }
  return (
    <>{handleBlock(data)}</>
  )
}