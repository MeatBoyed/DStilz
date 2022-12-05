// NEXT
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';

// UTILS
import { SanityClient } from '../../Utils';
import {
	CarPageContext,
	ProductData,
	ProductPageProps,
	ViewMoreSectionData,
} from '../../Utils/Interfaces';

// UI Components
import { HeaderSection, DataViewerSection } from '../../Lib/ProductPage';

const RecommendSection = dynamic(
	() => import('../../Lib/ProductPage/RecommendSection')
);
const DataTableSection = dynamic(
	() => import('../../Lib/ProductPage/DataTableSection')
);

export const ProductPage: NextPage<ProductPageProps> = ({
	recommendedData,
	productData: {
		title,
		price,

		make,
		series,
		model,

		images,

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
	},
}) => {
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
				images={images}
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
			<RecommendSection data={recommendedData} />
		</Container>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await SanityClient.fetch(
		`*[_type == "product" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug: any) => ({ params: { slug } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug = '' } = context.params as CarPageContext;

	const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]{slug,title,price,make, series, model,images,registrationYear,milage,transmission,sellersComment,previousOwners,bodyType,engineDetail,engineCapacity,cylinderLayoutQuantity,fuelType,fuelCapacity,acceleration,maximumTopSpeed}`;
	const productDataRes: ProductData = await SanityClient.fetch(productQuery);

	const recommenedDataQuery = `*[_type == "product" && make == "${productDataRes.make}" && slug.current != "${productDataRes.slug.current}"]{slug,title,price,make,series,model,registrationYear,milage,transmission,fuelType,thumbnail}`;
	const recommendDataRes: [ViewMoreSectionData] = await SanityClient.fetch(
		recommenedDataQuery
	);

	return {
		props: { productData: productDataRes, recommendedData: recommendDataRes },
	};
};

export default ProductPage;
