import { ParsedUrlQuery } from 'querystring';

export interface CategoryCardProps {
	title: string;
	image: string;
	link?: string;
}

export interface Slug {
	_type: string;
	current: string;
}

export interface ElevationScrollProp {
	window?: () => Window;
	children: React.ReactElement;
}

export interface ProductCardData {
	slug: Slug;
	title: string;
	thumbnail: ImageObject;
	make: string;
	model: string;
	registrationYear: string;
	price: number;
	milage: number;
	fuelType: string;
	transmission: string;
}

export interface PriceProps {
	price: number;
}

export interface DataTable {
	title: string;
	data: string | number;
}

export interface HeaderSectionProps {
	title: string;
	price: number;
}

export interface ProductData {
	// MetaData
	slug: Slug;
	// Header Details
	title: string;
	price: number;

	make: string;
	series: string;
	model: string;

	// thumbnail: string;
	images: [ImageObject];

	// 1st Body Details - Head
	registrationYear: number;
	milage: number;
	transmission: string;
	sellersComment: string;

	// 1st Body Details - Vehicle Details
	previousOwners: number;
	bodyType: string;
	// 2nd Body Details - Engine
	engineDetail: string;
	engineCapacity: number;
	cylinderLayoutQuantity: string;
	fuelType: string;
	fuelCapacity: number;
	fuelConsumption: number;
	acceleration: number;
	maximumTopSpeed: number;
}

export interface ProductPageProps {
	recommendedData: [ProductCardData];
	productData: ProductData;
}

export interface DataViewerSectionProps {
	make: string;
	series: string;
	model: string;
	registrationYear: number;
	milage: number;
	bodyType: string;
	transmission: string;
	images: [ImageObject];
}
export interface DataViewerTableProps {
	make: string;
	series: string;
	model: string;
	registrationYear: number;
	milage: number;
	bodyType: string;
	transmission: string;
}

export interface DataTableProps {
	previousOwners: number;
	engineDetail: string;
	engineCapacity: number;
	cylinderLayoutQuantity: string;
	fuelType: string;
	fuelCapacity: number;
	acceleration: number;
	maximumTopSpeed: number;
}

export interface ImageObject {
	_key: string;
	_type: string;
	asset: { _ref: string; _type: string };
}

export interface InfoCardProps {
	icon: string;
	header: string;
	body: string;
}

export interface ViewMoreSectionData {
	data: [ProductCardData];
}

export interface CarPageContext extends ParsedUrlQuery {
	slug: string;
}
