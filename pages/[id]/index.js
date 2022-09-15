import { Client } from "@notionhq/client"
import Block from "../../components/Block"
import Nav from "../../components/Nav"
import styles from '../../styles/Home.module.css'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export default function Post({ blocks }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        {blocks.map((block, key) => {
          return <Block data={block} key={key} />
        })}
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const blocks = await notion.blocks.children.list({
    block_id: params.id
  })

  const mappedBlocks = blocks.results.map((block) => {
    let filteredBlock = { ...block }
    delete filteredBlock.object
    delete filteredBlock.id
    delete filteredBlock.parent
    delete filteredBlock.created_time
    delete filteredBlock.last_edited_time
    delete filteredBlock.created_by
    delete filteredBlock.last_edited_by
    delete filteredBlock.has_children
    delete filteredBlock.archived

    return filteredBlock
  })

  return {
    props: {
      blocks: mappedBlocks
    },
  }
}