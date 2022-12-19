import type { NextPage } from 'next';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

interface props {
	make: string;
	model: string;
	variant: string;
	year: number;
	milage: number;
	bodyType: string;
	transmission: string;
	features: string[];
}
export const DataViewerTable: NextPage<props> = ({
	make,
	model,
	variant,
	year,
	milage,
	transmission,
	bodyType,
	features,
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
							{variant}
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
							{year}
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
					{/* Render out list of features */}
					<TableRow>
						<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
							Features:
						</TableCell>
						<TableCell
							component="th"
							scope="row"
							align="right"
							sx={{ color: '#ffff' }}
						></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataViewerTable;
