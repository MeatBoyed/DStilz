// NEXT
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';

// UI Components
import { HeaderSection } from '../../Lib/ProductPage';
import prisma from '../../Utils/prisma';
import { Vehicle } from '@prisma/client';
import Grid from '@mui/material/Grid';
import { SearchBox } from '../../Utils';
import ProductListSection from '../../Utils/Components/ProductListSection';
import { Pagination, PaginationItem } from '@mui/material';
import DASClient from '../../DAS/DASClient';
import { ISearchBoxData } from '../../DAS/Interfaces';
import { SearchBoxSection } from '../../Lib/HomePage';

const RecommendSection = dynamic(
	() => import('../../Utils/Components/ProductListSection')
);

interface props {
	searchBoxData: ISearchBoxData;
	// products: [Vehicle];
}

export const SearchPage: NextPage<props> = ({ searchBoxData }) => {
	// Might need to use a Buffer system
	const generateData = () => {
		let data: [Vehicle] = [
			{
				id: 'clbrkx0ga0000tbjofneiwthz',
				title: 'Audi A3 1.4TFSI STRONIC (35 TFSI)',
				make: 'Audi',
				model: 'A3',
				variant: '1.4TFSI',
				year: 2019,
				milage: 73886,
				price: 319900,
				color: 'Grey',
				bodyType: 'Hatchback',
				images: [
					'https://qzbzjpcvkmujoinkfgfn.supabase.co/storage/v1/object/public/vehicleimages/594/1.jfif',
				],
				features: ['Stronic'],
			},
		];
		for (let i = 0; i < 12; i++) {
			data.push({
				id: 'clbrkx0ga0000tbjofneiwthz',
				title: 'Audi A3 1.4TFSI STRONIC (35 TFSI)',
				make: 'Audi',
				model: 'A3',
				variant: '1.4TFSI',
				year: 2019,
				milage: 73886,
				price: 319900,
				color: 'Grey',
				bodyType: 'Hatchback',
				images: [
					'https://qzbzjpcvkmujoinkfgfn.supabase.co/storage/v1/object/public/vehicleimages/594/1.jfif',
				],
				features: ['Stronic'],
			});
		}

		return data;
	};

	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
			>
				<Grid item xs={true}>
					<SearchBox
						searchBoxTFData={searchBoxData.searchBoxTFData}
						yearsBoundaries={searchBoxData.yearsBoundaries}
						bodyTypes={searchBoxData.bodyTypes}
					/>
				</Grid>
				{/* Sort & Filter controls */}
				{/* These Controls perform array manipluation to ensure no reloading occurs */}
				<Grid item width="100%">
					{/* Render out the current requested data */}
					<ProductListSection data={generateData()} />
				</Grid>
				<Grid item width="100%">
					{/* <Pagination
						page={1}
						count={10}
						renderItem={(item) => (
							<PaginationItem
								component={MaterialUiLink}
								query={query}
								item={item}
								{...item}
							/>
						)}
					/> */}
					{/* PagesNeeded/MaxPages - Database must return a value of how many pages are required to render All of the items in a 4x3 layout that match the Search Query */}
					{/* Iterate & render the pagination controls based on the "MaxPage" value, and if "MaxPages" is > x amount, use smart pagnation rendering */}
					{/* Each pagination control, will make a new request for the Next 12 (4x3 layout) items */}
					{/* This request must be done without reloading of the page, perhaps rehydration is usefull. The Page count must be stored in the URL at all times. */}
				</Grid>
			</Grid>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const DAS = new DASClient();
	const searchBoxData = await DAS.getSearchBoxDataAsync();

	return {
		props: { searchBoxData: searchBoxData },
	};
};

export default SearchPage;
