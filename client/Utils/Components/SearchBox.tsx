import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {
	Autocomplete,
	MenuItem,
	Popper,
	Select,
	TextField,
} from '@mui/material';
import { useState } from 'react';

export const SearchBox: NextPage = () => {
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(0);

	const Categories = [
		{ make: 'Volkswagen', model: 'Citi', variant: '1.4i' },
		{ make: 'Volkswagen', model: 'Polo', variant: '1.4' },
		{ make: 'Volkswagen', model: 'Polo Vivo', variant: '1.4' },
		{ make: 'Mercedes', model: 'ML-Class', variant: '350' },
		{ make: 'Mercedes', model: 'X-Class', variant: '350d' },
		{ make: 'Mercedes', model: 'C-Class', variant: '200' },
	];

	const Styles = {
		Paper: {
			width: '19em',
			borderRadius: '10px',
			backgroundColor: '#424242',
			color: 'white',
		},
	};

	return (
		<Paper sx={Styles.Paper}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				spacing={3}
			>
				<Grid item>
					<Typography variant="h5" align="center" sx={{ fontSize: '1em' }}>
						Find New & Used Cars For Sale
					</Typography>
				</Grid>

				{/* Search Bar */}
				<Grid item>
					<Autocomplete
						disablePortal
						id="SearchBox"
						options={Categories}
						groupBy={(option) => option.make}
						getOptionLabel={(option) => option.model}
						size="small"
						fullWidth={true}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Search Make & Model"
								size="small"
								variant="filled"
							/>
						)}
						sx={{
							width: '17em',
							backgroundColor: 'white',
							borderRadius: '3px',
						}}
					/>
				</Grid>

				{/* Price Selection Containers */}
				<Grid
					item
					container
					width="17em"
					alignItems="center"
					justifyContent="space-between"
				>
					<Grid item>
						<Select
							labelId="MinPrice"
							id="MinPrice"
							value={minPrice}
							size="small"
							label="Min Price"
							variant="outlined"
							onChange={(e) => setMinPrice(e.target.value as number)}
							sx={{
								color: 'rgba(0, 0, 0, 0.6)',
								backgroundColor: 'white',
								fontSize: '1em',
								borderRadius: '3px',
							}}
						>
							<MenuItem value={0}>Min Price</MenuItem>
							<MenuItem value={10000}>10 000</MenuItem>
							<MenuItem value={50000}>50 000</MenuItem>
							<MenuItem value={100000}>100 000</MenuItem>
							<MenuItem value={110000}>110 000</MenuItem>
						</Select>
					</Grid>
					<Grid item>
						<Select
							labelId="MaxPrice"
							id="MaxPrice"
							value={maxPrice}
							size="small"
							label="Max Price"
							onChange={(e) => setMaxPrice(e.target.value as number)}
							sx={{
								color: 'rgba(0, 0, 0, 0.6)',
								backgroundColor: 'white',
								radius: '3px',
							}}
						>
							<MenuItem value={0}>Max Price</MenuItem>
							<MenuItem value={10000}>10 000</MenuItem>
							<MenuItem value={50000}>50 000</MenuItem>
							<MenuItem value={100000}>100 000</MenuItem>
							<MenuItem value={110000}>110 000</MenuItem>
						</Select>
					</Grid>
				</Grid>

				<Grid item>
					<Button
						variant="contained"
						size="small"
						sx={{
							backgroundColor: '#F33939',
							':hover': { backgroundColor: '#F33939' },
							marginBottom: '2em',
						}}
					>
						Search Now
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SearchBox;
