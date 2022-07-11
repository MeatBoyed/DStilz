import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Price } from '..';

export const HeaderSection: NextPage = () => {
	return (
		<Container sx={{ marginTop: '3em', marginBottom: '3em' }}>
			{/* Button hover colour */}
			<Button
				startIcon={<ChevronLeftIcon />}
				variant="contained"
				sx={{ backgroundColor: '#72797E' }}
			>
				Back To Search
			</Button>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{
					marginTop: '3em',
					borderBottom: '1px solid grey',
					paddingBottom: '1em',
				}}
			>
				<Grid item>
					<Typography variant="h5">2018 Ford Focus</Typography>
				</Grid>
				<Grid item>
					<Stack direction="row" spacing={2}>
						<Price price={0.000016} />
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HeaderSection;
