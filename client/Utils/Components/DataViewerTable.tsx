import type { NextPage } from 'next';

import { DataViewerSectionProps } from '../Interfaces';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

export const DataViewerTable: NextPage<DataViewerSectionProps> = ({
	make,
	series,
	model,
	registrationYear,
	milage,
	transmission,
	bodyType,
}) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ width: '100%', bgcolor: '#1B2935', color: '#ffff' }}>
				<TableBody>
					<TableRow>
						<TableCell
							component="th"
							scope="row"
							variant="head"
							sx={{
								color: '#ffff',
								fontSize: '1.3em',
								fontWeight: '600',
							}}
						>
							Vehicle Details
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						></TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Make:
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{make}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Series:
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{series}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Model:
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{model}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Milage
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{milage}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Transmission:
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{transmission}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Registration Year
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{registrationYear}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Body Type:
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						>
							{bodyType}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataViewerTable;
