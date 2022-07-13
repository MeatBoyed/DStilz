import { NextPage } from 'next';

import Container from '@mui/material/Container';
import {
	HeaderSection,
	DataViewerSection,
	DataTableSection,
	RecommendSection,
} from '../../Lib/ProductPage';

export const ProductPage: NextPage = () => {
	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<HeaderSection />
			<DataViewerSection />
			<DataTableSection />
			<RecommendSection />
		</Container>
	);
};

export default ProductPage;
