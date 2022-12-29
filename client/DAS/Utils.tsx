import { ParsedUrlQuery } from 'querystring';
import { Interface } from 'readline';
import { FullVehicle, ProductPageParams, SearchPageQuery } from './Interfaces';

// Primitive Type Checking
export const getAsString = (value: string | string[]): string => {
	if (Array.isArray(value)) {
		return value[0];
	}

	return value;
};

export const getValueStr = (
	value: string | string[] | undefined
): string | null => {
	if (value == undefined || value == '*') {
		return null;
	}
	const str = getAsString(value);
	return !str || str.toLowerCase() === 'all' ? null : str;
};

export const getValueNumber = (
	value: string | string[] | undefined
): number | null => {
	const str = getValueStr(value);
	if (str == null) {
		return null;
	}
	return isNaN(parseInt(str)) ? null : parseInt(str);
};

// Object Type Checking
export const isFullVehicle = (object: unknown): object is FullVehicle => {
	if (object !== null && typeof object === 'object') {
		return 'specification' in object;
	}

	return false;
};

// Parameter & Query Type Checking
export const isCorrectParams = (
	object: unknown,
	param: string
): object is ProductPageParams => {
	if (object !== null && typeof object === 'object') {
		return param in object;
	}

	return false;
};

export const isSearchPageQuery = (
	object: ParsedUrlQuery
): object is SearchPageQuery => {
	if (object !== null && typeof object === 'object') {
		return 'make' in object;
	}

	return false;
};
