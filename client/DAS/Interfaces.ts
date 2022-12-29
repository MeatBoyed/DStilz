import { Specification, Vehicle } from '@prisma/client';
import { ParsedUrlQuery } from 'querystring';

// DAS Definitions
export interface IDASClient {
	getSearchBoxDataAsync(): Promise<ISearchBoxData>;
	getSearchPageDataAsync(): Promise<SearchPageDataProp>;
}

// Page Props
export interface IProductPageData {
	vehicle: FullVehicle;
	recommendedVehicles: Vehicle[];
}
export interface ProductPageDataProp {
	props: IProductPageData;
}

export interface ISearchPageData {
	totalPages: number;
	products: Vehicle[];
	searchBoxData: ISearchBoxData;
}

export interface SearchPageDataProp {
	props: ISearchPageData;
}

// Component Props
export interface ISearchBoxData {
	bodyTypes: { bodyType: string }[];
	yearsBoundaries: [number, number];
	searchBoxTFData: { make: string; model: string }[];
}

// Param
export interface ProductPageParams extends ParsedUrlQuery {
	id: string;
}

export interface SearchPageQuery extends ParsedUrlQuery {
	make: string;
	page?: string;
	model?: string;
	milage?: string;
	maxYear?: string;
	minYear?: string;
	maxPrice?: string;
	minPrice?: string;
	bodyType?: string;
	rowsPerPage?: string;
}

// UTILs
export interface NotFoundResult {
	notFound: true;
	revalidate?: number | boolean | undefined;
}

export interface FullVehicle extends Vehicle {
	specification: Specification;
}
