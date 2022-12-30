/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: 'cloudinary',
		path: 'https://res.cloudinary.com/dleilanfz/image/upload',
		domains: ['qzbzjpcvkmujoinkfgfn.supabase.co'],
	},
};

module.exports = nextConfig;
