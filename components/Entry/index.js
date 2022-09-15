import Link from 'next/link'
import styles from './style.module.scss'

import Title from '../Title'
import Tag from '../Tag'
import Description from '../Description'

export default function Entry({ data }) {
  return (
    <Link href={`/${data.id}`}>
      <div className={styles.entry}>
        <Title title={data.name} />
        <section className={styles.tags}>
          {data.tags.map((tag, key) => {
            return <Tag key={key} color={tag.color} name={tag.name} />
          })}
        </section>
        <Description text={data.description} />
      </div>
    </Link>
  )
}

