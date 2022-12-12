import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';

import CarSale from '../../../public/CarSales.png';
import { InfoCard } from '../..';

export const InfoCardRender: NextPage = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={4}
		>
			<Grid item>
				<InfoCard
					icon={CarSale.src}
					header={'We Buy Cars Cash'}
					body={
						'Reach South Africa’s biggest and most serious audience of car buyers.'
					}
				/>
			</Grid>
			<Grid item>
				<InfoCard
					icon={CarSale.src}
					header={'We Buy Cars Cash'}
					body={
						'Search through 61 cars online, and have it delivered to your door.'
					}
				/>
			</Grid>
		</Grid>
	);
};

export default InfoCardRender;
