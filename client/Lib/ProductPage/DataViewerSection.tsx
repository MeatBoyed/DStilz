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
import { DataViewerSectionProps } from '../../Utils/Interfaces';

export const DataViewerSection: NextPage<DataViewerSectionProps> = ({
	make,
	series,
	model,
	registrationYear,
	milage,
	transmission,
	bodyType,
	images,
}) => {
	const [index, setIndex] = useState<number>(0);

	return (
		<Container sx={{ marginTop: '3em', marginBottom: '3em' }}>
			<Grid
				container
				direction={{ md: 'row', sm: 'column', xs: 'column' }}
				spacing={{ sm: 4, xs: 4 }}
				justifyContent="space-between"
			>
				<Grid item xs={6} width="100%" height="100%">
					<ImageViewer images={images} />
				</Grid>
				<Grid item xs={5} container direction="column" spacing={2}>
					<Grid item>
						<DataViewerTable
							make={make}
							series={series}
							model={model}
							registrationYear={registrationYear}
							milage={milage}
							transmission={transmission}
							bodyType={bodyType}
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
							>
								Enquire Now
							</Button>
							<Button
								variant="contained"
								endIcon={<ChevronRightIcon />}
								sx={{
									height: '3.2em',
									justifyContent: 'space-between',
									fontSize: '1em',
									bgcolor: '#444C53',
									textTransform: 'none',
								}}
							>
								Message Salesperson
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataViewerSection;
