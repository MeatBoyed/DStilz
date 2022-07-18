import { SanityClient } from '.';
import { ImageObject } from './Interfaces';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(SanityClient);

const imageBuilder = (
	image: ImageObject,
	width: number,
	height: number
): string => {
	return builder.image(image).width(width).height(height).url();
};

export default imageBuilder;
