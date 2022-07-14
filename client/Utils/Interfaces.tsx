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

export interface DataTableProps {
	data: DataTable[];
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

	// 1st Body Details - Head
	registrationYear: string;
	milage: number;
	transmission: string;
	sellersComment: string;

	// 1st Body Details - Vehicle Details
	previousOwners: number;
	serviceHistory: string;
	bodyType: string;
	// 2nd Body Details - General

	endDate: string;
	serviceIntervalDistance: string;

	// 2nd Body Details - Engine
	enginePosition: string;
	engineDetails: number;
	engineCapacity: number;
	cylinderLayoutQuantity: string;
	fuelType: string;
	fuelCapacity: number;
	fuelConsumption: number;
	fuelRange: number;
	powerMaximum: number;
	torqueMaximum: number;
	acceleration: number;
	maximumTopSpeed: number;
	co2Emissions: number;
}
