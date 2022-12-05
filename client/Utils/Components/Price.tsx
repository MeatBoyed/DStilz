import React from 'react';
import type { NextPage } from 'next';

import { PriceProps } from '../Interfaces';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Price: NextPage<PriceProps> = ({ price }) => {
	return (
		<Grid container direction="row" alignItems="center" alignContent="center">
			<Grid item sx={{ marginRight: '6px' }}>
				<Typography
					variant="h1"
					align="center"
					sx={{ fontSize: `${'18px'}`, color: '#F47920' }}
				>
					R
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="h1"
					align="center"
					sx={{ fontSize: `${'18px'}`, color: '#F47920' }}
				>
					{price.toLocaleString()}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Price;
