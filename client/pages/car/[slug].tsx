// NEXT
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';

// UTILS
import {
	CarPageContext,
	ProductData,
	ProductPageProps,
	ViewMoreSectionData,
} from '../../Utils/Interfaces';

// UI Components
import {
	HeaderSection,
	DataViewerSection,
	EnquireSection,
} from '../../Lib/ProductPage';
import Grid from '@mui/material/Grid';

const RecommendSection = dynamic(
	() => import('../../Lib/ProductPage/RecommendSection')
);
const DataTableSection = dynamic(
	() => import('../../Lib/ProductPage/DataEnquireSection')
);

export const ProductPage: NextPage = (
	{
		// recommendedData,
		// productData: {
		// 	title,
		// 	price,
		// 	make,
		// 	series,
		// 	model,
		// 	images,
		// 	// 1st Body Details - Head
		// 	registrationYear,
		// 	milage,
		// 	transmission,
		// 	sellersComment,
		// 	// 1st Body Details - Vehicle Details
		// 	previousOwners,
		// 	bodyType,
		// 	// 2nd Body Details - Engine
		// 	engineDetail,
		// 	engineCapacity,
		// 	cylinderLayoutQuantity,
		// 	fuelType,
		// 	fuelCapacity,
		// 	acceleration,
		// 	maximumTopSpeed,
		// },
	}
) => {
	const prodData: ProductData = {
		title: 'Mercedes Benz',
		price: 50000,
		make: 'Mercedes',
		series: 'A-Class',
		model: 'A250',
		images: [
			{
				_key: 'askdja',
				_type: 'image',
				asset: { _ref: 'iad', _type: 'asdkjasd' },
			},
		],
		// 1st Body Details - Head
		registrationYear: 2018,
		milage: 50000,
		transmission: 'Automatic',
		sellersComment: 'aksdkasjd',
		// 1st Body Details - Vehicle Details
		previousOwners: 1,
		bodyType: 'Hatchback',
		// 2nd Body Details - Engine
		engineDetail: 'I4',
		engineCapacity: 2.5,
		cylinderLayoutQuantity: 'I4',
		fuelType: 'Petrol',
		fuelCapacity: 30,
		acceleration: 2.5,
		maximumTopSpeed: 270,
	};
	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<HeaderSection title={prodData.title} price={prodData.price} />
			<DataViewerSection
				bodyType={prodData.bodyType}
				make={prodData.make}
				series={prodData.series}
				model={prodData.model}
				registrationYear={prodData.registrationYear}
				milage={prodData.milage}
				transmission={prodData.transmission}
				images={prodData.images}
			/>
			<DataTableSection
				previousOwners={prodData.previousOwners}
				engineDetail={prodData.engineDetail}
				engineCapacity={prodData.engineCapacity}
				cylinderLayoutQuantity={prodData.cylinderLayoutQuantity}
				fuelType={prodData.fuelType}
				fuelCapacity={prodData.fuelCapacity}
				acceleration={prodData.acceleration}
				maximumTopSpeed={prodData.maximumTopSpeed}
			/>
			{/* <RecommendSection data={recommendedData} /> */}
		</Container>
	);
};

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const paths = await SanityClient.fetch(
// 		`*[_type == "product" && defined(slug.current)][].slug.current`
// 	);

// 	return {
// 		paths: paths.map((slug: any) => ({ params: { slug } })),
// 		fallback: false,
// 	};
// };

// export const getStaticProps: GetStaticProps = async (context) => {
// 	const { slug = '' } = context.params as CarPageContext;

// 	const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]{slug,title,price,make, series, model,images,registrationYear,milage,transmission,sellersComment,previousOwners,bodyType,engineDetail,engineCapacity,cylinderLayoutQuantity,fuelType,fuelCapacity,acceleration,maximumTopSpeed}`;
// 	const productDataRes: ProductData = await SanityClient.fetch(productQuery);

// 	const recommenedDataQuery = `*[_type == "product" && make == "${productDataRes.make}" && slug.current != "${productDataRes.slug.current}"]{slug,title,price,make,series,model,registrationYear,milage,transmission,fuelType,thumbnail}`;
// 	const recommendDataRes: [ViewMoreSectionData] = await SanityClient.fetch(
// 		recommenedDataQuery
// 	);

// 	return {
// 		props: { productData: productDataRes, recommendedData: recommendDataRes },
// 	};
// };

export default ProductPage;
