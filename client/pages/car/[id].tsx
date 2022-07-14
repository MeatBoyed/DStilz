import { NextPage } from 'next';

import Container from '@mui/material/Container';
import {
	HeaderSection,
	DataViewerSection,
	DataTableSection,
	RecommendSection,
} from '../../Lib/ProductPage';

import { SanityClient } from '../../Utils';
import { DataTableProps, ProductPageProps } from '../../Utils/Interfaces';

export const ProductPage: NextPage<ProductPageProps> = ({
	title,
	price,

	// 1st Body Details - Head
	registrationYear,
	milage,
	transmission,
	sellersComment,

	// 1st Body Details - Vehicle Details
	previousOwners,
	serviceHistory,
	bodyType,
	// 2nd Body Details - General

	endDate,
	serviceIntervalDistance,

	// 2nd Body Details - Engine
	enginePosition,
	engineDetails,
	engineCapacity,
	cylinderLayoutQuantity,
	fuelType,
	fuelCapacity,
	fuelConsumption,
	fuelRange,
	powerMaximum,
	torqueMaximum,
	acceleration,
	maximumTopSpeed,
	co2Emissions,
}) => {
	const DataViewerData: DataTableProps = {
		registrationYear,
		milage,
		transmission,
		previousOwners,
		serviceHistory,
		bodyType,
		endDate,
		serviceIntervalDistance,
	};
	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<HeaderSection title={title} price={price} />
			<DataViewerSection data={DataViewerData} />
			<DataTableSection />
			<RecommendSection />
		</Container>
	);
};

export const getServerSideProps = async () => {
	const query =
		'*[_type == "product" && slug.current == "2013-mercedes-benz-e-class-e350-avantgarde"][0]{slug,title,price,registrationYear,milage,transmission,sellersComment,previousOwners,serviceHistory,bodyType,endDate,serviceIntervalDistance,enginePosition,engineDetails,engineCapacity,cylinderLayoutQuantity,fuelType,fuelCapacity,fuelConsumption,fuelRange,powerMaximum,torqueMaximum,acceleration,maximumTopSpeed,co2Emissions}';
	const res = await SanityClient.fetch(query);

	return {
		props: res,
	};
};

export default ProductPage;
