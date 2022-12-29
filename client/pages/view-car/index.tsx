// NEXT
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import DAS from '../../Utils/DASClient';
import { getValueNumber, ISearchPageData } from '../../DAS';

// MUI
import Container from '@mui/material/Container';

// UI Components
import Grid from '@mui/material/Grid';
import { SearchBox } from '../../Utils';
import { Pagination, PaginationItem } from '@mui/material';
import { MaterialUiLink } from '../../Utils/Components/MUILink';
import ProductListSection from '../../Utils/Components/ProductListSection';

export const SearchPage: NextPage<ISearchPageData> = ({
	searchBoxData,
	products,
	totalPages,
}) => {
	const { query } = useRouter();

	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px', background: '#f1f1f3' }}
			maxWidth={false}
			disableGutters={true}
		>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
				spacing={3}
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
					<ProductListSection data={products} />
				</Grid>
				<Grid item>
					<Pagination
						page={getValueNumber(query.page) || 1}
						count={totalPages}
						renderItem={(item) => (
							<PaginationItem
								component={MaterialUiLink}
								query={query}
								item={item}
								{...item}
							/>
						)}
					/>
					{/* PagesNeeded/MaxPages - Database must return a value of how many pages are required to render All of the items in a 4x3 layout that match the Search Query */}
					{/* Iterate & render the pagination controls based on the "MaxPage" value, and if "MaxPages" is > x amount, use smart pagnation rendering */}
					{/* Each pagination control, will make a new request for the Next 12 (4x3 layout) items */}
					{/* This request must be done without reloading of the page, perhaps rehydration is usefull. The Page count must be stored in the URL at all times. */}
				</Grid>
			</Grid>
		</Container>
	);
};

// Complex Type checking is needed for Query, therefore it is in the DAS layer
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return await DAS.getSearchPageDataAsync(ctx.query);
};

export default SearchPage;
