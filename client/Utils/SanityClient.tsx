import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'i7s7ha4p',
	dataset: 'production',
	apiVersion: '2022-07-13',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
