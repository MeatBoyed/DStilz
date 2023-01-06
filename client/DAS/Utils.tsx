import { NextApiRequest } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Interface } from 'readline';
import { EnquireData, EnquireResponse, FullVehicle, ProductPageParams, SearchPageQuery } from './Interfaces';
import { FormEvent } from 'react';

// Primitive Type Checking
export const getAsString = (value: string | string[]): string => {
	if (Array.isArray(value)) {
		return value[0];
	}

	return value;
};

export const getString = (value: string | string[] | undefined): string => {
	if (Array.isArray(value)) {
		return value[0];
	}

	return value || '';
};

export const getAsBool = (value: string | string[]): boolean => {
	if (value === 'false') {
		return false;
	} else if (value === 'true') {
		return true;
	}
	return false;
};

export const getValueStr = (value: string | string[] | undefined): string | null => {
	if (value == undefined || value == '*') {
		return null;
	}
	const str = getAsString(value);
	return !str || str.toLowerCase() === 'all' ? null : str;
};

export const getValueNumber = (value: string | string[] | undefined): number | null => {
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
export const isProductPageParam = (object: unknown): object is ProductPageParams => {
	if (object !== null && typeof object === 'object') {
		return 'id' in object;
	}

	return false;
};

export const isSearchPageQuery = (object: ParsedUrlQuery): object is SearchPageQuery => {
	if (object !== null && typeof object === 'object') {
		return 'make' in object;
	}

	return false;
};

// api/enquire
export const isEnquireData = (object: NextApiRequest['body']): object is EnquireData => {
	if (object !== null && typeof object === 'object') {
		return 'name' in object;
	}

	return false;
};

export const isEnquireResponse = (object: any): object is EnquireResponse => {
	if (object !== null && typeof object == 'object') {
		return 'isValid' in object;
	}

	return false;
};
