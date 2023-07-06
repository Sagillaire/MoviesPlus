import { FC } from 'react'
import { ILayout } from './types'
import styles from './styles.module.css'
import Navbar from '../navbar/Navbar'
import Card from '../card/Card'

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<Navbar />
			</div>
			<section className={styles.content}>
				{children}
				<Card
					imgCard={'/1p.jpg'}
					desc={'img card'}
					title={'Sin malos rollos'}
					fecha={'2023'}
				/>
			</section>
		</main>
	)
}
