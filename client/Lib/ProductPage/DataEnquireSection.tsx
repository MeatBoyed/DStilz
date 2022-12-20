import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { Specification } from '@prisma/client';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const SpecificationTable = dynamic(
	() => import('../../Utils/Components/ProductPage/SpecificationTable')
);
const EnquireCard = dynamic(
	() => import('../../Utils/Components/ProductPage/EnquireCard')
);

interface props {
	specification: Specification;
}

export const DataEnquireSection: NextPage<props> = ({ specification }) => {
	return (
		<Container
			sx={{
				marginTop: '6.4em',
				marginBottom: '3em',
			}}
			id="Specification&EnquireSection"
		>
			<Grid
				container
				alignItems="flex-start"
				spacing={{ sm: 8, xs: 4 }}
				justifyContent="center"
				sx={{ width: '100%', height: '100%' }}
			>
				<Grid item xs={true} width="100%">
					<SpecificationTable
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
				<Grid item id="EnquireCard">
					<EnquireCard />
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataEnquireSection;
