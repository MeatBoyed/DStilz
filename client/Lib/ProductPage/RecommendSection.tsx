import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { Vehicle } from '@prisma/client';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ProductCard = dynamic(() => import('../../Utils/Components/ProductCard'));

interface props {
	data: [Vehicle];
}

export const RecommendSection: NextPage<props> = ({ data }) => {
	return (
		<Container sx={{ marginTop: '6em', marginBottom: '10em' }}>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
			>
				<Grid item>
					<Typography
						variant="h5"
						align="left"
						sx={{
							fontSize: '2em',
							marginBottom: '1em',
							borderBottom: '1px solid grey',
							paddingBottom: '15px',
							fontStyle: 'italic',
						}}
					>
						More Like This
					</Typography>
				</Grid>
				<Grid container alignItems="center" justifyContent="center" spacing={5}>
					{data.map((product, i) => (
						<ProductCard key={i} product={product} />
					))}
				</Grid>
			</Grid>
		</Container>
	);
};

export default RecommendSection;
