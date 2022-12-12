import type { NextPage } from 'next';

import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { InfoCardProps } from '../../Interfaces';

export const InfoCard: NextPage<InfoCardProps> = ({ icon, header, body }) => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<Grid item width={45}>
				<Image
					src={icon}
					width={45}
					height={45}
					objectFit="fill"
					alt="Sell Cars Icon"
				/>
			</Grid>
			<Grid item>
				<Typography variant="h5" align="center" sx={{ fontSize: '1em' }}>
					{header}
				</Typography>
			</Grid>
			<Grid item width="80%">
				<Typography align="center" sx={{ fontSize: '.7em' }}>
					{body}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default InfoCard;
