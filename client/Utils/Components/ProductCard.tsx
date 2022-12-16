// Next & React
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// MUI
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/Card';
import { Link as MUILink } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Utils
import { Price } from '..';
import { ProductCardData, ProductCardProps } from '../Interfaces';
import thumbnail from '../../public/ProductCard.jpg';

export const ProductCard: NextPage<ProductCardProps> = ({ product }) => {
	const router = useRouter();
	// const ProductURL = `/car/${encodeURIComponent(product.slug.current)}`;
	const ProductURL = 'aksdjkas';
	return (
		<Grid item>
			<Card sx={{ width: '256px' }}>
				<Image
					src={thumbnail.src}
					layout="responsive"
					height={250}
					width={250}
					onClick={() => router.push(ProductURL)}
					alt={`${product.title} Thumbnail`}
				/>
				<CardContent sx={{ padding: '0.5em' }}>
					<Grid
						container
						direction="column"
						justifyContent="center"
						spacing={2}
					>
						<Grid item>
							<Link href={ProductURL}>
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
					<Button onClick={() => router.push(ProductURL)}>Details</Button>
					<IconButton
						aria-label="favorite"
						onClick={() => router.push('/favourites')}
					>
						<FavoriteBorderIcon fontSize="medium" />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductCard;
