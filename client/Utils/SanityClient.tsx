import sanityClient from '@sanity/client';
import { ImageObject } from './Interfaces';
import imageUrlBuilder from '@sanity/image-url';

export const SanityClient = sanityClient({
	projectId: 'i7s7ha4p',
	dataset: 'production',
	apiVersion: '2022-07-13',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(SanityClient);

export const imageBuilder = (
	image: ImageObject,
	width: number,
	height: number
): string => {
	return builder.image(image).size(width, height).auto('format').url();
};
