import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Container from '@mui/material/Container';
import { Theme, Navbar, Footer, Header } from '../Utils';
import { ThemeProvider } from '@mui/material';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Header />
			<main>
				<ThemeProvider theme={Theme}>
					<Container id="MainRoot" maxWidth={false}>
						<Navbar />
						<Component {...pageProps} />
						<Footer />
					</Container>
				</ThemeProvider>
			</main>
		</Fragment>
	);
}

export default MyApp;
