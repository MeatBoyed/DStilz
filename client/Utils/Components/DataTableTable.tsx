import type { NextPage } from 'next';

import { DataTableProps } from '../Interfaces';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';

import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import React from 'react';

export const DataTableTable: NextPage<DataTableProps> = ({
	previousOwners,
	engineCapacity,
	engineDetail,
	cylinderLayoutQuantity,
	fuelType,
	fuelCapacity,
	acceleration,
	maximumTopSpeed,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
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
						>
							<IconButton
								aria-label="DropDownIcon"
								onClick={() => setIsOpen(!isOpen)}
							>
								<ExpandMore fontSize="large" sx={{ fill: 'white' }} />
							</IconButton>
						</TableCell>
					</TableRow>
					{isOpen && (
						<React.Fragment>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Previous Owners
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{previousOwners}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Engine Details:
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{engineDetail}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Engine Capacity:
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{engineCapacity} L
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Cylinder Layout:
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{cylinderLayoutQuantity}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Fuel Type:
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{fuelType}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Fuel Capacity:
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{fuelCapacity} L
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Acceleration
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{acceleration} s
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row" sx={{ color: '#ffff' }}>
									Maximum Top Speed:
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									align="right"
									sx={{ color: '#ffff' }}
								>
									{maximumTopSpeed} Km/h
								</TableCell>
							</TableRow>
						</React.Fragment>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTableTable;
