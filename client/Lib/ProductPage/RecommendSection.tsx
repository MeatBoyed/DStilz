import type { GetServerSideProps, NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProductCard from '../../Utils/Components/ProductCard';

import { ViewMoreSectionData } from '../../Utils/Interfaces';

export const RecommendSection: NextPage<ViewMoreSectionData> = ({ data }) => {
	return (
		<Container sx={{ marginTop: '6em', marginBottom: '10em' }}>
			<Typography
				variant="h5"
				align="left"
				sx={{
					fontSize: '2em',
					marginBottom: '1em',
					borderBottom: '1px solid grey',
					paddingBottom: '15px',
				}}
			>
				Recommened
			</Typography>
			<Grid container alignItems="center" justifyContent="center" spacing={5}>
				{data.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</Grid>
		</Container>
	);
};

export default RecommendSection;
