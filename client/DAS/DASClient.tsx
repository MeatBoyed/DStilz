import { Prisma } from '@prisma/client';
import { ISearchBoxData } from './Interfaces';
import prisma from './Prisma';

export default class DASClient {
	private async getSearchBoxTextFieldData() {
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
}
