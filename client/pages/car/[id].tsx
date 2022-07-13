import { NextPage } from 'next';

import Container from '@mui/material/Container';
import {
	HeaderSection,
	DataViewerSection,
	DataTableSection,
	RecommendSection,
} from '../../Lib/ProductPage';

import { SanityClient } from '../../Utils';

interface ProductProps {
	title: string;
	category: string;
	colour: string;
	dateOfFirstLicensing: number;
	location: string;
	milage: number;
	price: number;
	spareKey: string;
}

export const ProductPage: NextPage<ProductProps> = ({
	title,
	category,
	colour,
	dateOfFirstLicensing,
	location,
	milage,
	price,
	spareKey,
}) => {
	return (
		<Container
			id="ProductPage"
			component="section"
			sx={{ marginTop: '18px' }}
			maxWidth={false}
			disableGutters={true}
		>
			<h1>{title}</h1>
			<h1>{category}</h1>
			<h1>{colour}</h1>
			<h1>{dateOfFirstLicensing}</h1>
			<h1>{location}</h1>
			<h1>{milage}</h1>
			<h1>{price}</h1>
			<h1>{spareKey}</h1>
			<HeaderSection />
			<DataViewerSection />
			<DataTableSection />
			<RecommendSection />
		</Container>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const res = await SanityClient.fetch(query);
	const product: ProductProps = {
		title: res[0].title,
		category: res[0].category,
		colour: res[0].colour,
		dateOfFirstLicensing: res[0].dateOfFirstLicensing,
		location: res[0].location,
		milage: res[0].milage,
		price: res[0].price,
		spareKey: res[0].spareKey,
	};

	console.log(product);

	return {
		props: {
			title: product.title,
			category: product.category,
			colour: product.colour,
			dateOfFirstLicensing: product.dateOfFirstLicensing,
			location: product.location,
			milage: product.milage,
			price: product.price,
			spareKey: product.spareKey,
		},
	};
};

export default ProductPage;
