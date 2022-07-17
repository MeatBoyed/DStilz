import { NextPage } from 'next';

import Container from '@mui/material/Container';
import {
	HeaderSection,
	DataViewerSection,
	DataTableSection,
	RecommendSection,
} from '../../Lib/ProductPage';

import { SanityClient } from '../../Utils';
import { ProductPageProps } from '../../Utils/Interfaces';

export const ProductPage: NextPage<ProductPageProps> = ({
	title,
	price,

	make,
	series,
	model,

	image,

	// 1st Body Details - Head
	registrationYear,
	milage,
	transmission,
	sellersComment,

	// 1st Body Details - Vehicle Details
	previousOwners,
	bodyType,
	// 2nd Body Details - Engine
	engineDetail,
	engineCapacity,
	cylinderLayoutQuantity,
	fuelType,
	fuelCapacity,
	acceleration,
	maximumTopSpeed,
}) => {
	// export const ProductPage: NextPage = () => {
	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<HeaderSection title={title} price={price} />
			<DataViewerSection
				bodyType={bodyType}
				make={make}
				series={series}
				model={model}
				registrationYear={registrationYear}
				milage={milage}
				transmission={transmission}
			/>
			<DataTableSection
				previousOwners={previousOwners}
				engineDetail={engineDetail}
				engineCapacity={engineCapacity}
				cylinderLayoutQuantity={cylinderLayoutQuantity}
				fuelType={fuelType}
				fuelCapacity={fuelCapacity}
				acceleration={acceleration}
				maximumTopSpeed={maximumTopSpeed}
			/>
			<RecommendSection />
		</Container>
	);
};

export const getServerSideProps = async () => {
	const query =
		'*[_type == "product" && slug.current == "mercedes-benz-cla-cla250-sport"][0]{slug,title,price,make, series, model,image,registrationYear,milage,transmission,sellersComment,previousOwners,bodyType,engineDetail,engineCapacity,cylinderLayoutQuantity,fuelType,fuelCapacity,acceleration,maximumTopSpeed}';
	const res: ProductPageProps = await SanityClient.fetch(query);

	return {
		props: res,
	};
};

export default ProductPage;
