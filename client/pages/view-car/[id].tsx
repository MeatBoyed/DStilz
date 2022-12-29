// NEXT, Prisma & DAS
import dynamic from 'next/dynamic';
import prisma from '../../Utils/prisma';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { DASClient, isCorrectParams, IProductPageData } from '../../DAS';

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
	const vehicles = await prisma.vehicle.findMany({
		select: { id: true },
	});

	return {
		paths: vehicles.map((vehicle) => ({ params: { id: vehicle.id } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!isCorrectParams(params, 'id')) {
		return { notFound: true };
	}

	return await new DASClient().getProductPageDataAsync(params.id);
};

export default ProductPage;
