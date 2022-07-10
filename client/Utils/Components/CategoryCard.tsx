import React from 'react';
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
					style={{
						height: '100%',
						backgroundImage: `url(${image})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						borderRadius: '4px',
					}}
					spacing={2}
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
			</Paper>
		</Grid>
	);
};

export default CategoryCard;
