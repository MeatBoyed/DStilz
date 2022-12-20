import type { NextPage } from 'next';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import React from 'react';

interface props {
	previousOwners: number;
	engineDetails: string;
	engineCapacity: number;
	cylinderLayout: string;
	fuelType: string;
	fuelCapacity: number;
	acceleration: number;
	topSpeed: number;
}

export const SpecificationTable: NextPage<props> = ({
	previousOwners,
	engineCapacity,
	engineDetails,
	cylinderLayout,
	fuelType,
	fuelCapacity,
	acceleration,
	topSpeed,
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
							Vehicle Specifications
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
							{engineDetails}
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
							{cylinderLayout}
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
							{topSpeed} Km/h
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SpecificationTable;
