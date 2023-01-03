import Head from 'next/head';
import { NextPage } from 'next';

export const Header: NextPage = () => {
	return (
		<Head key="main">
			<meta charSet="utf-8" />
			<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes" />

			{/* <!--theme colors --> */}
			<meta name="theme-color" content="" />
			<meta name="apple-mobile-web-app-status-bar-style" content="" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

			{/* <!--Basic meta info --> */}
			<meta name="keywords" content="DstilezAuto Dstilez dstiles cars dealership rent to own" />
			<meta name="author" content="Charles Rossouw" />
			<meta name="description" content="Search for new and used cars in South Africa" />

			{/* <!--OpenGraph meta --> */}
			<meta property="og:description" content="Search for new and used cars in South Africa" />
			<meta property="og:title" content="Cars for Sale in South Africa - Dstilez Auto" />
			<meta property="og:image" content="logo.png" />
			<meta property="og:url" content="dstilezauto.com" />

			{/* <!--meta for twitter --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@dstilezauto" />
			<meta name="twitter:title" content="" />
			<meta name="twitter:image" content="logo.png" />
			<meta name="twitter:site" content="@dstilezauto" />
			<meta name="twitter:description" content="Search for new and used cars in South Africa" />

			{/* <!--Favicon--> */}
			<link rel="shortcut icon" type="image/png" href="logo.png" />

			{/* <!-- Manifest for PWA --> */}
			<link rel="manifest" href="manifest.json" />
			<title>Search for Cars - Dstilez Auto</title>
		</Head>
	);
};

export default Header;
