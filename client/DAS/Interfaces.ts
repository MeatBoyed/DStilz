export interface IDASClient {
	getSearchBoxData(): Promise<ISearchBoxData>;
}

export interface ISearchBoxData {
	bodyTypes: { bodyType: string }[];
	yearsBoundaries: [number, number];
	searchBoxTFData: { make: string; model: string }[];
}
