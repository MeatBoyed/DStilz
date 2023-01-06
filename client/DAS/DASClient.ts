import { ParsedUrlQuery } from 'querystring';
import { EnquireData, HomePageDataProp, ISearchBoxData, NotFoundResult, ProductPageDataProp, SearchPageDataProp } from './Interfaces';
import { getValueNumber, getValueStr, isFullVehicle, isProductPageParam, isSearchPageQuery } from './Utils';
// import prisma from '../Utils/prisma';
import { prisma } from './prisma';
import { GetStaticPathsResult } from 'next';
import { Customer, Prisma } from '@prisma/client';

export class DASClient {
	// Get Page Data
	public async getHomePageDataAsync(): Promise<HomePageDataProp> {
		const vehicles = await prisma.vehicle.findMany();
		return {
			props: {
				recommendedVehicles: vehicles,
				searchBoxData: await this.getSearchBoxDataAsync(),
			},
		};
	}

	public async getProductPageDataAsync(id: string): Promise<ProductPageDataProp | NotFoundResult> {
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

	// TODO Implement Offsetting
	public async getSearchPageDataAsync(query: ParsedUrlQuery): Promise<SearchPageDataProp> {
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

	// Create Data
	public async createLead(enquireData: EnquireData): Promise<string> {
		// Input structures
		const customerInput: Prisma.CustomerCreateWithoutEnquiresInput = {
			name: enquireData.name,
			email: enquireData.email,
			surname: enquireData.surname,
			phoneNumber: enquireData.phone,
			countryCallingCode: enquireData.countryCallingCode,
		};

		// Get Salesperson number
		const salesperson = await prisma.salesPerson.findUnique({
			where: { email: 'dstilezauto@dstilezauto.com' },
			select: { phoneNumber: true, countryCallingCode: true },
		});

		if (salesperson?.phoneNumber == null && salesperson?.countryCallingCode == null) {
			return 'error';
		}

		await prisma.lead.create({
			data: {
				customer: {
					connectOrCreate: {
						where: { phoneNumber: enquireData.phone },
						create: customerInput,
					},
				},
				salesPerson: {
					connect: { email: 'dstilezauto@dstilezauto.com' },
				},
				status: 'Loading',
				vehicle: {
					connect: { id: enquireData.vehicleId },
				},
			},
		});

		// Generate WhatsappLink
		return this.generateWhatsAppLink({ phone: salesperson.phoneNumber, code: salesperson.countryCallingCode }, enquireData.vehicleId);
	}

	// Util Methods
	public async generateStaticPaths(): Promise<GetStaticPathsResult> {
		const vehicles = await prisma.vehicle.findMany({
			select: { id: true },
		});

		return {
			paths: vehicles.map((vehicle) => ({ params: { id: vehicle.id } })),
			fallback: false,
		};
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

	private generateWhatsAppLink(salesperson: { phone: string; code: string }, vehicleId: string): string {
		const number = salesperson.phone.replace(`+${salesperson.code}`, '').replaceAll(' ', '');
		const text: string = encodeURI(`Good day,\nI'm intrested in dstilezaauto.com/view-car/${vehicleId} ...`);

		return `https://wa.me/${number}?text=${text}`;
	}

	private async getSearchBoxTextFieldData(): Promise<{ make: string; model: string }[]> {
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
}
