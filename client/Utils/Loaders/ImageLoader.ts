export default function myImageLoader({ src, width }) {
	return `https://res.cloudinary.com/dleilanfz/image/upload/e_blur:200/c_scale,w_${width}/q_50/${src}`;
}
