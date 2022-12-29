// NEXT, Prisma & DAS
import dynamic from 'next/dynamic';
import DAS from '../../Utils/DASClient';
import { IProductPageData, isProductPageParam } from '../../DAS';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';

// UI Components
import { HeaderSection, DataViewerSection } from '../../Lib/ProductPage';
const ProductListSection = dynamic(
	() => import('../../Utils/Components/ProductListSection')
);
const DataEnquireSection = dynamic(
	() => import('../../Lib/ProductPage/DataEnquireSection')
);

export const ProductPage: NextPage<IProductPageData> = ({
	vehicle,
	recommendedVehicles,
}) => {
	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<HeaderSection title={vehicle.title} price={vehicle.price} />
			<DataViewerSection
				vehicle={vehicle}
				transmission={vehicle.specification.transmission}
			/>
			<DataEnquireSection specification={vehicle.specification} />
			<ProductListSection data={recommendedVehicles} header={true} />
		</Container>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return await DAS.generateStaticPaths();
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!isProductPageParam(params)) {
		return { notFound: true };
	}
	return await DAS.getProductPageDataAsync(params.id);
};

export default ProductPage;
