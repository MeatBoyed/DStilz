// Next & React
import { NextPage } from 'next';
import { useState, FormEvent } from 'react';

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
import { ISearchBoxData } from '../../DAS/Interfaces';
import { generateMilages, generatePrices, generateYears } from '../Generators';
import { useRouter } from 'next/router';

// Get current info values form the DB
// Get input input values from the User
// Make query based on input

export const SearchBox: NextPage<ISearchBoxData> = ({
	bodyTypes,
	searchBoxTFData,
	yearsBoundaries,
}) => {
	const router = useRouter();

	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(0);
	const [minYear, setMinYear] = useState<number>(0);
	const [maxYear, setMaxYear] = useState<number>(0);
	const [bodyType, setBodyType] = useState<string>('bodyType');
	const [milage, setMilage] = useState<number>(0);
	const [searchBoxData, setSearchBoxData] = useState<{
		make: string;
		model: string;
	} | null>(null);

	// There should be a cached version of Searchbox data that can be pulled from, as currently it is unlikely that the database
	// will be subdue to a lot of complex changes

	// TODO - Before production, generate this Searchbox data ba	sed on the "real" data

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let query: Record<string, any> = {};

		if (searchBoxData?.make != undefined) {
			query.make = searchBoxData.make.slice(
				0,
				searchBoxData.make.indexOf(' (')
			);
			query.model = searchBoxData.model.slice(
				0,
				searchBoxData.model.indexOf(' (')
			);
		}

		// Price
		if (minPrice > 0) {
			query.minPrice = minPrice;
		}
		if (maxPrice > 0) {
			query.maxPrice = maxPrice;
		}

		// Year
		if (minYear > 0) {
			query.minYear = minYear;
		}
		if (maxYear > 0) {
			query.maxYear = maxYear;
		}

		// Milage
		if (milage > 0) {
			query.milage = milage;
		}

		// Body Type
		if (bodyType != 'bodyType') {
			query.bodyType = bodyType;
		}

		// Do some default search thing for empty query requests

		router.push({
			pathname: '/view-car',
			query: query,
		});
	};

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
			<form onSubmit={handleSearch}>
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
							{/* Search Bar */}
							<MenuItem>
								<Autocomplete
									disablePortal
									id="SearchBox"
									options={searchBoxTFData}
									groupBy={(option) => option.make}
									getOptionLabel={(option) => option.model}
									size="medium"
									fullWidth={true}
									value={searchBoxData}
									onChange={(event, newValue) => {
										setSearchBoxData(newValue);
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											label="Search Make, Model"
											size="medium"
											variant="filled"
										/>
									)}
									renderGroup={(params) => (
										<li>
											<Typography
												variant="h5"
												sx={{
													fontSize: '1em',
													fontWeight: '600',
													padding: '4px 10px',
												}}
											>
												{params.group}
											</Typography>
											<Typography
												variant="h6"
												sx={{
													fontSize: '.8em',
													fontWeight: '500',
													padding: '4px 10px',
												}}
											>
												{params.children}
											</Typography>
										</li>
									)}
									sx={{
										backgroundColor: 'white',
									}}
								/>
							</MenuItem>
							{/* Min/Max Price */}
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
											{generatePrices()}
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
											{generatePrices()}
										</Select>
									</Grid>
								</Grid>
							</MenuItem>
							{/* Year Selector */}
							<MenuItem>
								<Grid
									container
									justifyContent="center"
									alignItems="center"
									spacing={2}
								>
									{/* Min Year */}
									<Grid item xs={6}>
										<Select
											labelId="MinYear"
											id="MinYear"
											value={minYear}
											size="small"
											label="Min Year"
											variant="outlined"
											onChange={(e) => setMinYear(e.target.value as number)}
											sx={{
												color: 'rgba(0, 0, 0, 0.6)',
												backgroundColor: 'white',
												width: '100%',
											}}
										>
											<MenuItem value={0}>Min Year</MenuItem>
											{generateYears(yearsBoundaries)}
										</Select>
									</Grid>
									{/* Max Year */}
									<Grid item xs={6}>
										<Select
											labelId="MaxYear"
											id="MaxYrear"
											value={maxYear}
											size="small"
											label="Max Year"
											onChange={(e) => setMaxYear(e.target.value as number)}
											sx={{
												color: 'rgba(0, 0, 0, 0.6)',
												backgroundColor: 'white',
												width: '100%',
											}}
										>
											<MenuItem value={0}>Max Year</MenuItem>
											{generateYears(yearsBoundaries)}
										</Select>
									</Grid>
								</Grid>
							</MenuItem>
							{/* Milage Selector */}
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
									{generateMilages()}
								</Select>
							</MenuItem>
							{/* Body Type Selector */}
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
									{bodyTypes.map((bodyType, i) => (
										<MenuItem key={i} value={bodyType.bodyType}>
											<Typography
												variant="h6"
												sx={{
													fontSize: '.9em',
													fontWeight: '500',
													padding: '4px 10px',
												}}
											>
												{bodyType.bodyType}
											</Typography>
										</MenuItem>
									))}
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
							type="submit"
						>
							Search 1 000 Cars
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default SearchBox;
