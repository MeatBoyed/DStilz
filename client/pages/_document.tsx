import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { GA_TRACKING_ID } from '../Utils/gtag';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<Script
						id="google-analytics"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
						}}
					/>
					{/* Google AdSense */}
					<Script
						async
						id="Adsense-id"
						strategy="afterInteractive"
						data-ad-client="ca-pub-8690090547939700"
						onError={(e) => {
							console.error('Script failed to load', e);
						}}
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
