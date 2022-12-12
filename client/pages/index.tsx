import dynamic from 'next/dynamic';

import { Container, Grid } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
// import styles from '../styles/Home.module.css';

import { BannerSection, SearchBoxSection } from '../Lib/HomePage';
const ViewMoreSection = dynamic(
	() => import('../Lib/HomePage/ViewMoreSection')
);
const AboutSection = dynamic(() => import('../Lib/HomePage/AboutSection'));

import { ProductCardData, ViewMoreSectionData } from '../Utils/Interfaces';

// Error handling for no Internet
const Home: NextPage = () => {
	const Data: [ViewMoreSectionData] = [
		{
			data: [
				{
					slug: { _type: 'product', current: 'kdjsfkjasfdk' },
					thumbnail: {
						_key: 'askdja',
						_type: 'image',
						asset: { _ref: 'iad', _type: 'asdkjasd' },
					},
					title: 'Mercedes A250 AMG',
					make: 'Mercedes',
					model: 'A250',
					registrationYear: '2018',
					price: 650000,
					milage: 150000,
					fuelType: 'Petrol',
					transmission: 'Automatic',
				},
			],
		},
	];

	const prodData: [ProductCardData] = [
		{
			slug: { _type: 'product', current: 'kdjsfkjasfdk' },
			thumbnail: {
				_key: 'askdja',
				_type: 'image',
				asset: { _ref: 'iad', _type: 'asdkjasd' },
			},
			title: 'Mercedes A250 AMG',
			make: 'Mercedes',
			model: 'A250',
			registrationYear: '2018',
			price: 650000,
			milage: 150000,
			fuelType: 'Petrol',
			transmission: 'Automatic',
		},
	];
	return (
		<Container id="HomePage" maxWidth={false} disableGutters={true}>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{ width: '100%' }}
			>
				<Grid item sx={{ width: '100%' }}>
					<BannerSection />
				</Grid>
				<Grid item sx={{ width: '100%' }}>
					<SearchBoxSection />
				</Grid>
				<Grid item sx={{ width: '100%' }}>
					<AboutSection />
				</Grid>
				<Grid item sx={{ width: '100%' }}>
					<ViewMoreSection data={prodData} />
				</Grid>

				<Grid item>
					<h1>Contact forum</h1>
				</Grid>
			</Grid>
		</Container>
	);
};

// export const getStaticProps: GetStaticProps = async () => {
// 	const query =
// 		'*[_type == "product"]{slug,title,price,make,series,model,registrationYear,milage,transmission,fuelType,thumbnail}';
// 	const res: [ViewMoreSectionData] = await SanityClient.fetch(query);

// 	return {
// 		props: { data: res },
// 	};
// };

export default Home;
