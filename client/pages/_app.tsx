import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Container from '@mui/material/Container';
import { Footer, Navbar } from '../Utils';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container id="MainRoot" maxWidth={false}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Container>
	);
}

export default MyApp;
