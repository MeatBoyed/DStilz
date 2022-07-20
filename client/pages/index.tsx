import { Container } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
// import styles from '../styles/Home.module.css';

import {
	BannerSection,
	CategoriesSection,
	AboutSection,
	ViewMoreSection,
} from '../Lib/HomePage';

import { SanityClient } from '../Utils';
import { ViewMoreSectionData } from '../Utils/Interfaces';

const Home: NextPage<ViewMoreSectionData> = ({ data }) => {
	return (
		<Container
			id="HomePage"
			component="section"
			maxWidth={false}
			disableGutters={true}
		>
			<BannerSection />
			<CategoriesSection />
			<AboutSection />
			<ViewMoreSection data={data} />
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
