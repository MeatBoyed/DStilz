import '../styles/globals.css';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';

import * as gtag from '../Utils/gtag';
import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import { Theme, Navbar, Footer, Header } from '../Utils';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

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
