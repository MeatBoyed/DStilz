import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const FavouritesPageIndex: NextPage = () => {
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
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
					<Grid item>{/* <ProductCard product={data} key={2} /> */}</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

export default FavouritesPageIndex;
