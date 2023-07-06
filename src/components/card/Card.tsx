import { FC } from 'react'
import styles from './card.module.css'
import Image from 'next/image' 
import { ICard } from './types'

const Card: FC<ICard> = ({ imgCard, title, desc, fecha }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        width={145}
        height={225}
        src={imgCard}
        alt={desc}
      />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.cardDate}>{fecha}</span>
    </div>
  )
}

export default Card
