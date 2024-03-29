import { Specification, Vehicle } from '@prisma/client';
import { MuiTelInputInfo } from 'mui-tel-input';
import { GetStaticPathsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';

// DAS Definitions
export interface IDASClient {
	createLead(): Promise<string>;
	getSearchBoxDataAsync(): Promise<ISearchBoxData>;
	getHomePageDataAsync(): Promise<HomePageDataProp>;
	generateStaticPaths(): Promise<GetStaticPathsResult>;
	getSearchPageDataAsync(query: ParsedUrlQuery): Promise<SearchPageDataProp>;
	getProductPageDataAsync(id: string): Promise<ProductPageDataProp | NotFoundResult>;
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

export interface IHomePageData {
	searchBoxData: ISearchBoxData;
	recommendedVehicles: Vehicle[];
}
export interface HomePageDataProp {
	props: IHomePageData;
}

// Api/enquire
export interface EnquireData {
	name: string;
	email: string;
	phone: string;
	surname: string;
	vehicleId: string;
	willTrade: boolean;
	isEnquire: boolean;
	requireFinance: boolean;
	countryCallingCode: string;
}

export interface EnquireResponse {
	message: string;
	error: string;
	whatsappLink: string;
	isValid: boolean;
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
