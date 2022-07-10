import { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import CategoryCard from '../../Utils/Components/CategoryCard';

import Category from '../../Images/Category.jpg';

export const CategoriesSection: NextPage = () => {
	return (
		<Container maxWidth="xl" sx={{ marginTop: '6.5em' }}>
			<Grid container direction="row" justifyContent="center" spacing={15}>
				{/* <CategoryCard title={'Hatchback'} image={Category} />
				<CategoryCard title={'Sudan'} image={Category} />
				<CategoryCard title={'SUV'} image={Category} /> */}
			</Grid>
		</Container>
	);
};

export default CategoriesSection;
