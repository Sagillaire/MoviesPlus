import { FC } from 'react'
import { ILayout } from './types'
import styles from './styles.module.css'

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<h1>HEADER SECTION</h1>
			</div>
			<section className={styles.content}>
				{children}
			</section>
		</main>
	)
}
