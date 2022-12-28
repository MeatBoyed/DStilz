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
	const number = parseInt(str);
	return isNaN(number) ? null : number;
};
