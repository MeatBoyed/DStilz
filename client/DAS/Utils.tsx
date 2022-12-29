import { FullVehicle, ProductPageParams } from './Interfaces';

// Primitive Type Checking
export const getAsString = (value: string | string[]): string => {
	if (Array.isArray(value)) {
		return value[0];
	}

	return value;
};

export const getValueStr = (value: string | string[]): string | null => {
	const str = getAsString(value);
	return !str || str.toLowerCase() === 'all' ? null : str;
};

export const getValueNumber = (value: string | string[]): number | null => {
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

// Parameter Type Checking
export const isCorrectParams = (
	object: unknown,
	param: string
): object is ProductPageParams => {
	if (object !== null && typeof object === 'object') {
		return param in object;
	}

	return false;
};
