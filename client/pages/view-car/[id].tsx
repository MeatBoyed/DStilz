// NEXT
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';

// UI Components
import { HeaderSection, DataViewerSection } from '../../Lib/ProductPage';
import prisma from '../../Utils/prisma';
import { Vehicle } from '@prisma/client';

const ProductListSection = dynamic(
	() => import('../../Utils/Components/ProductListSection')
);
const DataEnquireSection = dynamic(
	() => import('../../Lib/ProductPage/DataEnquireSection')
);

interface props {
	vehicle: Vehicle;
	recommendedVehicles: [Vehicle];
}

export const ProductPage: NextPage<props> = ({
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
	const vehicle = await prisma.vehicle.findUnique({
		where: {
			id: params.id,
		},
		include: {
			specification: true,
		},
	});

	if (vehicle) {
		const recommendedVehicles = await prisma.vehicle.findMany();

		return {
			props: {
				vehicle: vehicle,
				recommendedVehicles: recommendedVehicles,
			},
		};
	}

	return {
		notFound: true,
	};
};

export default ProductPage;
