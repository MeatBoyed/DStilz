// Next
import type { NextPage } from 'next';

// MUI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// Utils
import { DataViewerTable, ImageViewer } from '../../Utils';
import { Vehicle } from '@prisma/client';

interface props {
	vehicle: Vehicle;
	transmission: string;
}

// TODO Decide wether to delete Enquire button, and opt to route to EnquireCard. Add functionality for Messaging Salesperson
export const DataViewerSection: NextPage<props> = ({
	vehicle,
	transmission,
}) => {
	return (
		<Container sx={{ marginTop: '3em' }}>
			<Grid
				container
				direction={{ md: 'row', sm: 'column', xs: 'column' }}
				alignItems="flex-start"
				justifyContent="space-between"
			>
				<Grid item xs={true} width="100%" height="100%">
					<ImageViewer images={vehicle.images} />
				</Grid>
				<Grid item>
					<DataViewerTable
						make={vehicle.make}
						model={vehicle.model}
						variant={vehicle.variant}
						year={vehicle.year}
						milage={vehicle.milage}
						transmission={transmission}
						bodyType={vehicle.bodyType}
						features={vehicle.features}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataViewerSection;
