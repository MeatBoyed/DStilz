import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { DataTableTable } from '../../Utils';
import EnquireCard from '../../Utils/Components/ProductPage/EnquireCard';
import { Specification } from '@prisma/client';

interface props {
	specification: Specification;
}

export const DataEnquireSection: NextPage<props> = ({ specification }) => {
	return (
		<Container sx={{ marginTop: '5em', marginBottom: '3em' }}>
			<Grid
				container
				alignItems="flex-start"
				spacing={{ sm: 8, xs: 4 }}
				justifyContent="center"
				sx={{ width: '100%', height: '100%' }}
			>
				<Grid item xs={true} width="100%">
					<DataTableTable
						previousOwners={specification.previousOwners}
						engineDetails={specification.engineDetails}
						engineCapacity={specification.engineCapacity}
						cylinderLayout={specification.cylinderLayout}
						fuelType={specification.fuelType}
						fuelCapacity={specification.fuelCapacity}
						acceleration={specification.acceleration}
						topSpeed={specification.topSpeed}
					/>
				</Grid>
				<Grid item>
					<EnquireCard />
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataEnquireSection;
