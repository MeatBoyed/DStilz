import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { CategoryCardProps } from '../Interfaces';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CategoryCard: NextPage<CategoryCardProps> = ({
	title,
	image,
	link,
}) => {
	const Styles = {
		Paper: {
			height: '382px',
			width: '243px',
			borderRadius: '10px',
		},
		Title: { color: '#ffff', fontSize: '2.5em' },
	};

	return (
		<Grid item>
			<Paper elevation={12} sx={Styles.Paper}>
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
				>
					<Grid
						item
						sx={{
							width: '243px',
							height: '382px',
							position: 'relative',
							borderRadius: '10px',
						}}
					>
						<Image src={image} layout="fill" objectFit="cover" alt="yes" />
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						spacing={2}
						sx={{ position: 'absolute' }}
					>
						<Grid item>
							<Typography variant="h5" sx={Styles.Title}>
								{title}
							</Typography>
						</Grid>
						<Grid item>
							<Button variant="contained" size="large">
								Shop Now
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default CategoryCard;
