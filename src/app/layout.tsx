import '../styles/globalStyles.css'
import { Layout } from '@/components'
import { ClientComponent } from '@/Auth'

export const metadata = {
	title: 'MoviesPlus',
	description: 'A simple movie aplication.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ClientComponent>
					<Layout>
						{children}
					</Layout>
				</ClientComponent>
			</body>
		</html>
	)
}
