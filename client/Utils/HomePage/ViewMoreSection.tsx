import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ProductCard } from '..';

import ProductCardImage from '../../public/ProductCard.jpg';

export const ViewMoreSection: NextPage = () => {
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
						<ProductCard
							id="asdsdsd"
							thumbnail={ProductCardImage.src}
							title="2017 Porsche 911"
							subtitle="S 2dr PDK"
							price={0.000016}
							milage={50000}
							fuelType="petrol"
							transmissionType="Automatic"
						/>
						<ProductCard
							id="asdsdsd"
							thumbnail={ProductCardImage.src}
							title="2017 Porsche 911"
							subtitle="S 2dr PDK"
							price={0.000016}
							milage={50000}
							fuelType="petrol"
							transmissionType="Automatic"
						/>
						<ProductCard
							id="asdsdsd"
							thumbnail={ProductCardImage.src}
							title="2017 Porsche 911"
							subtitle="S 2dr PDK"
							price={0.000016}
							milage={50000}
							fuelType="petrol"
							transmissionType="Automatic"
						/>
						<ProductCard
							id="asdsdsd"
							thumbnail={ProductCardImage.src}
							title="2017 Porsche 911"
							subtitle="S 2dr PDK"
							price={0.000016}
							milage={50000}
							fuelType="petrol"
							transmissionType="Automatic"
						/>
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
