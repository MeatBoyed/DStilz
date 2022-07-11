import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Container from '@mui/material/Container';
import { Theme, Navbar, Footer } from '../Utils';
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<Container id="MainRoot" maxWidth={false}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
