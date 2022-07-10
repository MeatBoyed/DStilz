import React from 'react';
import type { NextPage } from 'next';

import { ProductCardProps } from '../Interfaces';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Price from './Price';

export const ProductCard: NextPage<ProductCardProps> = ({
	id,
	thumbnail,
	title,
	subtitle,
	price,
	milage,
	fuelType,
	transmissionType,
}) => {
	return (
		<Grid item>
			<Card sx={{ width: '256px' }}>
				<CardMedia
					component="img"
					alt="Product Card"
					height="222"
					image={thumbnail}
				/>
				<CardContent sx={{ padding: '0.5em' }}>
					<Grid
						container
						direction="column"
						justifyContent="center"
						spacing={2}
					>
						<Grid item>
							<Link
								variant="h6"
								to={`/car/${id}`}
								underline="none"
								sx={{ color: 'black' }}
							>
								{title}
							</Link>
							<Typography variant="subtitle2" gutterBottom>
								{subtitle}
							</Typography>
						</Grid>
						<Grid item>
							<Price price={price} />
						</Grid>
						<Grid item>
							<Typography>Milage: {milage}km</Typography>
							<Typography>Fuel Type: {fuelType}</Typography>
							<Typography>Transmission: {transmissionType}</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Button to={`/car/${id}`}>Details</Button>
					<IconButton to="/favourites" aria-label="favorite">
						<FavoriteBorderIcon fontSize="medium" />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductCard;
