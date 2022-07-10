import { Container } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import {
	BannerSection,
	CategoriesSection,
	AboutSection,
	ViewMoreSection,
} from '../Utils/HomePage';

const Home: NextPage = () => {
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
			<ViewMoreSection />
		</Container>
	);
};

export default Home;
