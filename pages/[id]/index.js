import { Client } from "@notionhq/client";
import Link from "next/link";
import Block from "../../components/Block";
import Nav from "../../components/Nav";
import styles from "../../styles/Home.module.scss";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default function Post({ blocks }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.back}>
          <Link href="/">← Back to list</Link>
        </div>
        {blocks.map((block, key) => {
          return <Block data={block} key={key} />;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const entries = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "niceUrl",
      rich_text: {
        equals: params.id,
      },
    },
  });

  if (
    entries.results.length == 0 ||
    entries.results[0].properties.visible.checkbox == false
  ) {
    return {
      notFound: true,
    };
  }

  const blocks = await notion.blocks.children.list({
    block_id: entries.results[0].id,
  });

  const mappedBlocks = blocks.results.map((block) => {
    let filteredBlock = { ...block };
    delete filteredBlock.object;
    delete filteredBlock.id;
    delete filteredBlock.parent;
    delete filteredBlock.created_time;
    delete filteredBlock.last_edited_time;
    delete filteredBlock.created_by;
    delete filteredBlock.last_edited_by;
    delete filteredBlock.has_children;
    delete filteredBlock.archived;

    return filteredBlock;
  });

  return {
    props: {
      blocks: mappedBlocks,
    },
  };
}
