import { ParsedUrlQuery } from 'querystring';
import { ProductCardProps } from '../Utils/Interfaces';
import {
	IProductPageData,
	ISearchBoxData,
	ISearchPageData,
	NotFoundResult,
	ProductPageDataProp,
	SearchPageDataProp,
} from './Interfaces';
import prisma from './Prisma';
import {
	getValueNumber,
	getValueStr,
	isFullVehicle,
	isSearchPageQuery,
} from './Utils';

export class DASClient {
	private async getSearchBoxTextFieldData(): Promise<
		{ make: string; model: string }[]
	> {
		let data: [{ make: string; model: string }] = [{ make: '', model: '' }];

		const vehicleMMV = await prisma.vehicle.groupBy({
			by: ['make', 'model'],
			_count: { model: true },
			orderBy: { make: 'asc' },
		});

		const getMakeCounts = await prisma.vehicle.groupBy({
			by: ['make'],
			_count: true,
		});

		vehicleMMV.forEach((item, index) => {
			let row: { make: string; model: string } = { make: '', model: '' };
			getMakeCounts.forEach((el) => {
				if (item.make === el.make) {
					row.make = `${el.make} (${el._count})`;
				}
				row.model = `${item.model} (${item._count.model})`;
				data[index] = row;
			});
		});

		return data;
	}

	public async getSearchBoxDataAsync(): Promise<ISearchBoxData> {
		// Get Years
		let years: [number, number] = [0, 0];
		const getYears = await prisma.vehicle.aggregate({
			_min: {
				year: true,
			},
			_max: {
				year: true,
			},
		});

		if (getYears._min.year != null && getYears._max.year != null) {
			years = [getYears._min.year, getYears._max.year];
		}

		// Get BodyTypes
		const getBodyTypes = await prisma.vehicle.findMany({
			select: {
				bodyType: true,
			},
			distinct: ['bodyType'],
			orderBy: { bodyType: 'asc' },
		});

		// Get Autocomplete Data
		const searchBoxTFData = await this.getSearchBoxTextFieldData();

		return {
			bodyTypes: getBodyTypes,
			yearsBoundaries: years,
			searchBoxTFData: searchBoxTFData,
		};
	}

	// TODO Implement Offsetting
	public async getSearchPageDataAsync(
		query: ParsedUrlQuery
	): Promise<SearchPageDataProp> {
		if (!isSearchPageQuery(query)) {
			return {
				props: {
					products: await prisma.vehicle.findMany(),
					totalPages: 0,
					searchBoxData: await this.getSearchBoxDataAsync(),
				},
			};
		}
		const page = getValueNumber(query.page) || 1;
		const rowsPerPage = getValueNumber(query.rowsPerPage) || 4;
		const offset = (page - 1) * rowsPerPage;

		const cars = await prisma.vehicle.findMany({
			where: {
				make: getValueStr(query.make) || undefined,
				model: getValueStr(query.model) || undefined,
				price: {
					lte: getValueNumber(query.maxPrice) || undefined,
					gte: getValueNumber(query.minPrice) || undefined,
				},
				year: {
					lte: getValueNumber(query.maxYear) || undefined,
					gte: getValueNumber(query.minYear) || undefined,
				},
				milage: {
					lte: getValueNumber(query.milage) || undefined,
				},
				bodyType: getValueStr(query.bodyType) || undefined,
			},
			take: 20,
		});

		const totalRows = await prisma.vehicle.aggregate({
			where: { make: query.make, model: query.model },
			_count: true,
		});

		return {
			props: {
				products: cars,
				totalPages: Math.ceil(totalRows._count / rowsPerPage),
				searchBoxData: await this.getSearchBoxDataAsync(),
			},
		};
	}

	public async getProductPageDataAsync(
		id: string
	): Promise<ProductPageDataProp | NotFoundResult> {
		const vehicle = await prisma.vehicle.findUnique({
			where: {
				id: id,
			},
			include: {
				specification: true,
			},
		});

		// Ensure Vehicle exists & is of correct Type
		if (!isFullVehicle(vehicle)) {
			return { notFound: true };
		}

		const recommendedVehicles = await prisma.vehicle.findMany();

		return {
			props: {
				vehicle: vehicle,
				recommendedVehicles: recommendedVehicles,
			},
		};
	}
}
