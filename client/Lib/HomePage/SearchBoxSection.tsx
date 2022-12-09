import type { NextPage } from 'next';

import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Autocomplete, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

import CarSale from '../../public/CarSales.png';
import { CategoryCard, InfoCard, InfoCardRender, SearchBox } from '../../Utils';

export const SearchBoxSection: NextPage = () => {
	return (
		<Container
			maxWidth={false}
			disableGutters={true}
			sx={{ marginTop: '5em', marginBottom: '3em' }}
			id="SearchBox"
			component="section"
		>
			<Container>
				<Grid
					container
					direction={{ lg: 'row', md: 'row', sm: 'column' }}
					justifyContent="center"
					alignItems="center"
					spacing={5}
				>
					<Grid item>
						<SearchBox />
					</Grid>
					<Grid item>
						<InfoCardRender />
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

export default SearchBoxSection;
