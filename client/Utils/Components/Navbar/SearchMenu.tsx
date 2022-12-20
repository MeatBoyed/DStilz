// Next & React
import { NextPage } from 'next';
import { useState } from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const SearchMenu: NextPage = () => {
	const Categories = [
		{ make: 'Volkswagen', model: 'Citi', variant: '1.4i' },
		{ make: 'Volkswagen', model: 'Polo', variant: '1.4' },
		{ make: 'Volkswagen', model: 'Polo Vivo', variant: '1.4' },
		{ make: 'Mercedes', model: 'ML-Class', variant: '350' },
		{ make: 'Mercedes', model: 'X-Class', variant: '350d' },
		{ make: 'Mercedes', model: 'C-Class', variant: '200' },
	];

	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(0);
	const [bodyType, setBodyType] = useState<string>('bodyType');
	const [milage, setMilage] = useState<number>(0);
	return (
		<Paper
			sx={{
				height: '100%',
				width: '100%',
				color: 'white',
				paddingTop: '1em',
				backgroundColor: '#0987eb',
			}}
		>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Grid item sx={{ paddingLeft: '.8em', paddingRight: '.8em' }}>
					<Typography variant="h4" align="center" sx={{ fontSize: '1.5em' }}>
						Search For New & Used Cars For Sale
					</Typography>
				</Grid>
				<Grid item width="100%">
					<MenuList>
						<MenuItem>
							<Autocomplete
								disablePortal
								id="SearchBox"
								options={Categories}
								groupBy={(option) => option.make}
								getOptionLabel={(option) => option.model}
								size="medium"
								fullWidth={true}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Search Make, Model & Variat"
										size="medium"
										variant="filled"
									/>
								)}
								sx={{
									backgroundColor: 'white',
								}}
							/>
						</MenuItem>
						<MenuItem>
							<Grid
								container
								justifyContent="center"
								alignItems="center"
								spacing={2}
							>
								<Grid item xs={6}>
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
											width: '100%',
										}}
									>
										<MenuItem value={0}>Min Price</MenuItem>
										<MenuItem value={10000}>10 000</MenuItem>
										<MenuItem value={50000}>50 000</MenuItem>
										<MenuItem value={100000}>100 000</MenuItem>
										<MenuItem value={110000}>110 000</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={6}>
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
											width: '100%',
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
						</MenuItem>
						<MenuItem>
							<Select
								labelId="Milage"
								id="Milage"
								value={milage}
								size="small"
								label="Milage"
								onChange={(e) => setMilage(e.target.value as number)}
								sx={{
									color: 'rgba(0, 0, 0, 0.6)',
									backgroundColor: 'white',
									width: '100%',
								}}
							>
								<MenuItem value={0}>Max Milage</MenuItem>
								<MenuItem value={10000}>10 000</MenuItem>
								<MenuItem value={50000}>50 000</MenuItem>
								<MenuItem value={100000}>100 000</MenuItem>
								<MenuItem value={110000}>110 000</MenuItem>
							</Select>
						</MenuItem>
						<MenuItem>
							<Select
								labelId="BodyType"
								id="BodyType"
								value={bodyType}
								size="small"
								onChange={(e) => setBodyType(e.target.value as string)}
								sx={{
									color: 'rgba(0, 0, 0, 0.6)',
									backgroundColor: 'white',
									width: '100%',
								}}
							>
								<MenuItem value={'bodyType'}>Body Type</MenuItem>
								<MenuItem value={'Coupe'}>Coupe</MenuItem>
								<MenuItem value={'Crew-Bus'}>Crew Bus</MenuItem>
								<MenuItem value={'Double-Cab'}>Double Cab</MenuItem>
								<MenuItem value={'Extended-Cab'}>Extended Cab</MenuItem>
								<MenuItem value={'Hatchback'}>Hatchback</MenuItem>
								<MenuItem value={'MPV'}>MPV</MenuItem>
								<MenuItem value={'Sedan'}>Sedan</MenuItem>
								<MenuItem value={'Station-Wagon'}>Station Wagon</MenuItem>
								<MenuItem value={'SUB'}>SUV</MenuItem>
							</Select>
						</MenuItem>
					</MenuList>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						size="large"
						sx={{
							backgroundColor: '#F33939',
							':hover': { backgroundColor: '#F33939' },
							marginBottom: '2em',
						}}
					>
						Search 1 000 Cars
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SearchMenu;
