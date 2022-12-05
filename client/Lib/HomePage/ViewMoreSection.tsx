import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ProductCard } from '../../Utils';

import { ViewMoreSectionData } from '../../Utils/Interfaces';

export const ViewMoreSection: NextPage<ViewMoreSectionData> = ({ data }) => {
	return (
		<Container maxWidth={false} sx={{ marginBottom: '3em' }}>
			<Container>
				<Typography
					variant="h5"
					align="center"
					sx={{ fontSize: '3em', marginBottom: '1em' }}
				>
					Best Deals
				</Typography>
				<Grid container justifyContent="center" alignItems="center" spacing={4}>
					<Grid
						item
						container
						direction="row"
						justifyContent="center"
						spacing={4}
					>
						{data.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							size="large"
							sx={{
								backgroundColor: '#F33939',
								':hover': { backgroundColor: '#F33939' },
								marginTop: '2em',
							}}
						>
							View More
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

export default ViewMoreSection;
