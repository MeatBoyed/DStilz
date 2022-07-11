import type { NextPage } from 'next';

import { DataTableProps } from '../Interfaces';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

export const DataTable: NextPage<DataTableProps> = ({ data }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ width: '100%', bgcolor: '#1B2935', color: '#ffff' }}>
				<TableBody>
					{data.map((row, index) => {
						if (index === 0) {
							return (
								<TableRow key={index}>
									<TableCell
										component="th"
										scope="row"
										variant="head"
										sx={{
											color: '#ffff',
											fontSize: '1.3em',
											fontWeight: '600',
											opacity: `${row.title === 'Empty' && '0%'}`,
										}}
									>
										{row.title}
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										align="right"
										sx={{ color: '#ffff' }}
									>
										{row.data}
									</TableCell>
								</TableRow>
							);
						} else {
							return (
								<TableRow key={index}>
									<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
										{row.title}
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										align="right"
										sx={{ color: '#ffff' }}
									>
										{row.data}
									</TableCell>
								</TableRow>
							);
						}
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
