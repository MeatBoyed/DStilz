import dynamic from 'next/dynamic';

import { Container, Grid } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
// import styles from '../styles/Home.module.css';

import { BannerSection, CategoriesSection } from '../Lib/HomePage';
const ViewMoreSection = dynamic(
	() => import('../Lib/HomePage/ViewMoreSection')
);
const AboutSection = dynamic(() => import('../Lib/HomePage/AboutSection'));

import { SanityClient } from '../Utils';
import { ViewMoreSectionData } from '../Utils/Interfaces';

// Error handling for no Internet
const Home: NextPage<ViewMoreSectionData> = ({ data }) => {
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
				<Grid item>
					<h1>Search Box</h1>
				</Grid>
				{/* <Grid item sx={{ width: '100%' }}>
					<CategoriesSection />
				</Grid> */}
				<Grid item sx={{ width: '100%' }}>
					<AboutSection />
				</Grid>
				<Grid item sx={{ width: '100%' }}>
					<ViewMoreSection data={data} />
				</Grid>

				<Grid item>
					<h1>Contact forum</h1>
				</Grid>
			</Grid>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const query =
		'*[_type == "product"]{slug,title,price,make,series,model,registrationYear,milage,transmission,fuelType,thumbnail}';
	const res: [ViewMoreSectionData] = await SanityClient.fetch(query);

	return {
		props: { data: res },
	};
};

export default Home;
