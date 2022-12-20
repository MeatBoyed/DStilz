// Next
import { useState } from 'react';
import type { NextPage } from 'next';

// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Utils
import { DataViewerTable, ImageViewer } from '../../Utils';
import { Vehicle } from '@prisma/client';
import WhatsAppMed from '../../public/WhatsAppMed.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface props {
	vehicle: Vehicle;
	transmission: string;
}

// TODO Decide wether to delete Enquire button, and opt to route to EnquireCard. Add functionality for Messaging Salesperson
export const DataViewerSection: NextPage<props> = ({
	vehicle,
	transmission,
}) => {
	const router = useRouter();
	return (
		<Container sx={{ marginTop: '3em' }}>
			<Grid
				container
				direction={{ md: 'row', sm: 'column', xs: 'column' }}
				spacing={{ sm: 4, xs: 4 }}
				justifyContent="space-between"
			>
				<Grid item xs={6} width="100%" height="100%">
					<ImageViewer images={vehicle.images} />
				</Grid>
				<Grid item xs={5} container direction="column" spacing={2}>
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
					<Grid item>
						<Stack direction="column" spacing={2}>
							<Button
								variant="contained"
								endIcon={<ChevronRightIcon fontSize="large" />}
								sx={{
									height: '3.2em',
									justifyContent: 'space-between',
									fontSize: '1em',
									bgcolor: '#F47920',
								}}
								onClick={() => router.push('#EnquireCard')}
							>
								Enquire Now
							</Button>
							<Button
								variant="contained"
								startIcon={
									<Image
										width={30}
										height={30}
										objectFit="fill"
										src={WhatsAppMed.src}
									/>
								}
								sx={{
									fontSize: '1em',
									justifyContent: 'flex-start',
									backgroundColor: '#25D366',
								}}
								onClick={() =>
									router.push(
										`https://wa.me/270656853805?text=I'm%20interested%20in%20your%20car%20for%20sale`
									)
								}
							>
								Enquire on WhatsApp
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataViewerSection;
