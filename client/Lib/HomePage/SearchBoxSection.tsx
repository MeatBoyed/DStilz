import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { SearchBox } from '../../Utils';
const InfoCardRender = dynamic(
	() => import('../../Utils/Components/HomePage/InfoCardRender')
);

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
					<Grid item sm={6}>
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
