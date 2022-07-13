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
