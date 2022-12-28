import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { SearchBox } from '../../Utils';
import { ISearchBoxData } from '../../DAS/Interfaces';
const InfoCardRender = dynamic(
	() => import('../../Utils/Components/HomePage/InfoCardRender')
);

interface props {
	searchBoxData: ISearchBoxData;
}
export const SearchBoxSection: NextPage<props> = ({ searchBoxData }) => {
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
						<SearchBox
							bodyTypes={searchBoxData.bodyTypes}
							searchBoxTFData={searchBoxData.searchBoxTFData}
							yearsBoundaries={searchBoxData.yearsBoundaries}
						/>
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
