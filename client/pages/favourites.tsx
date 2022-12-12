import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ProductCard } from '../Utils/index';
import ProductCardImage from '../public/ProductCard.jpg';
import { ProductCardData } from '../Utils/Interfaces';

export const FavouritesPageIndex: NextPage = () => {
	const data: ProductCardData = {
		slug: { _type: 'product', current: 'kdjsfkjasfdk' },
		title: '2017 Porsche 911',
		thumbnail: {
			_key: 'askdja',
			_type: 'image',
			asset: { _ref: 'iad', _type: 'asdkjasd' },
		},
		make: 'Porsche',
		model: '911',
		registrationYear: '2017',
		price: 0.000016,
		milage: 50000,
		fuelType: 'petrol',
		transmissionType: 'Automatic',
	};
	return (
		<Container
			id="FavouritesPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
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
					Favourites
				</Typography>
				<Grid container alignItems="center" justifyContent="center" spacing={5}>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
					<Grid item>
						<ProductCard product={data} key={2} />
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

export default FavouritesPageIndex;
