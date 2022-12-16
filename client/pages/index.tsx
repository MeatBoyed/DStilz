// NEXT & Prisma
import dynamic from 'next/dynamic';
import { ProductCard } from '@prisma/client';
import prisma from '../Utils/prisma';
import type { GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import styles from '../styles/Home.module.css';

// Utils
import { BannerSection, SearchBoxSection } from '../Lib/HomePage';
const ViewMoreSection = dynamic(
	() => import('../Lib/HomePage/ViewMoreSection')
);
const AboutSection = dynamic(() => import('../Lib/HomePage/AboutSection'));
import { ProductCardData, ViewMoreSectionData } from '../Utils/Interfaces';

interface props {
	data: [ProductCard];
}
// Error handling for no Internet
const Home: NextPage<props> = ({ data }) => {
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
	const data = await prisma.productCard.findMany();

	return {
		props: { data: data },
	};
};

export default Home;
