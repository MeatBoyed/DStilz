import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProductCard from '../../Utils/Components/ProductCard';

import ProductCardImage from '../../public/ProductCard.jpg';

export const RecommendSection: NextPage = () => {
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
		</Container>
	);
};

export default RecommendSection;
