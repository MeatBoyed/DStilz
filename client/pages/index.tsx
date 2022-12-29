// NEXT & Prisma
import dynamic from 'next/dynamic';
import DAS from '../Utils/DASClient';
import { IHomePageData } from '../DAS';
import type { GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import styles from '../styles/Home.module.css';

// Utils
import { BannerSection, SearchBoxSection } from '../Lib/HomePage';
const AboutSection = dynamic(() => import('../Lib/HomePage/AboutSection'));
const ProductListSection = dynamic(
	() => import('../Utils/Components/ProductListSection')
);

// Error handling for no Internet
const Home: NextPage<IHomePageData> = ({
	recommendedVehicles,
	searchBoxData,
}) => {
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
					<SearchBoxSection searchBoxData={searchBoxData} />
				</Grid>
				<Grid item sx={{ width: '100%' }}>
					<AboutSection />
				</Grid>
				<Grid item sx={{ width: '100%' }}>
					<ProductListSection data={recommendedVehicles} />
				</Grid>
			</Grid>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return await DAS.getHomePageDataAsync();
};

export default Home;
