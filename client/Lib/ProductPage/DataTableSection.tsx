import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { DataTable } from '../../Utils';

const DataForTable = [
	{ title: 'Vehicle Details', data: '' },
	{ title: 'Category', data: 'A' },
	{ title: 'Date of first licensing', data: 2018 },
	{ title: 'Milage', data: '100km' },
	{ title: 'Colour', data: 'Red' },
	{ title: 'Stock Code', data: 'BB7A15884' },
	{ title: 'Branch', data: 'Ankara' },
	{ title: 'Spare Key Available', data: 'Yes' },
	{ title: 'Category', data: 'A' },
	{ title: 'Date of first licensing', data: 2018 },
	{ title: 'Milage', data: '100km' },
	{ title: 'Colour', data: 'Red' },
	{ title: 'Stock Code', data: 'BB7A15884' },
	{ title: 'Branch', data: 'Ankara' },
	{ title: 'Spare Key Available', data: 'Yes' },
];

export const DataTableSection: NextPage = () => {
	return (
		<Container sx={{ marginTop: '8em', marginBottom: '3em' }}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				sx={{ width: '100%' }}
			>
				<Grid item xs={12}>
					<DataTable data={DataForTable} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataTableSection;
