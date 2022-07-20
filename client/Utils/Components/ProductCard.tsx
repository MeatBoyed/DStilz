import React from 'react';
import type { NextPage } from 'next';

import { ProductCardData } from '../Interfaces';

import Card from '@mui/material/Card';
import Link from 'next/link';
import { Link as MUILink } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Price, imageBuilder } from '..';
import { useRouter } from 'next/router';

interface props {
	product: ProductCardData;
}

export const ProductCard: NextPage<props> = ({ product }) => {
	const router = useRouter();
	return (
		<Grid item>
			<Card sx={{ width: '256px' }}>
				<Link href={`/car/${encodeURIComponent(product.slug.current)}`}>
					<CardMedia
						component="img"
						alt="Product Card"
						height="222"
						image={imageBuilder(product.thumbnail, 250, 200)}
						sx={{ cursor: 'pointer' }}
					/>
				</Link>
				<CardContent sx={{ padding: '0.5em' }}>
					<Grid
						container
						direction="column"
						justifyContent="center"
						spacing={2}
					>
						<Grid item>
							<Link href={`/car/${encodeURIComponent(product.slug.current)}`}>
								<MUILink
									variant="h6"
									underline="none"
									sx={{ color: 'black', cursor: 'pointer', fontSize: '1em' }}
								>
									{product.title}
								</MUILink>
							</Link>
							<Typography variant="subtitle2" gutterBottom>
								{product.make} {product.model}
							</Typography>
						</Grid>
						<Grid item>
							<Price price={product.price} />
						</Grid>
						<Grid item>
							<Typography>Year: {product.registrationYear}</Typography>
							<Typography>Milage: {product.milage} km</Typography>
							<Typography>Fuel Type: {product.fuelType}</Typography>
							<Typography>Transmission: {product.transmission}</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Link href={`/car/${encodeURIComponent(product.slug.current)}`}>
						<Button>Details</Button>
					</Link>
					<Link href="/favourites">
						<IconButton aria-label="favorite">
							<FavoriteBorderIcon fontSize="medium" />
						</IconButton>
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductCard;
