import { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CategoryCard } from '../../Utils';

import Category from '../../public/Category.jpg';

export const CategoriesSection: NextPage = () => {
	return (
		<Container maxWidth="xl" sx={{ marginTop: '6.5em' }}>
			<Grid container direction="row" justifyContent="center" spacing={15}>
				<CategoryCard title={'Hatchback'} image={Category.src} />
				<CategoryCard title={'Sudan'} image={Category.src} />
				<CategoryCard title={'SUV'} image={Category.src} />
			</Grid>
		</Container>
	);
};

export default CategoriesSection;
