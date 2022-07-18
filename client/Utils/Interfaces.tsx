export interface CategoryCardProps {
	title: string;
	image: string;
	link?: string;
}

export interface ElevationScrollProp {
	window?: () => Window;
	children: React.ReactElement;
}

export interface ProductCardProps {
	id: string;
	thumbnail: string;
	title: string;
	subtitle: string;
	price: number;
	milage: number;
	fuelType: string;
	transmissionType: 'Automatic' | 'Manual';
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

export interface ProductPageProps {
	// MetaData
	slug: {
		_type: string;
		current: string;
	};
	// Header Details
	title: string;
	price: number;

	make: string;
	series: string;
	model: string;

	// thumbnail: string;
	images: [ImageObject];

	// 1st Body Details - Head
	registrationYear: string;
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

export interface DataViewerSectionProps {
	make: string;
	series: string;
	model: string;
	registrationYear: string;
	milage: number;
	bodyType: string;
	transmission: string;
	images: [ImageObject];
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
