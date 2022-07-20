import type { NextPage } from 'next';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { DataViewerTable } from '../../Utils';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DataViewerSectionProps } from '../../Utils/Interfaces';
import { useState } from 'react';
import { imageBuilder } from '../../Utils';

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
				<Grid
					item
					container
					xs={6}
					direction="row"
					spacing={1}
					width="600px"
					height="600px"
				>
					<Grid item>
						<Image
							src={imageBuilder(images[index], 800, 600)}
							alt="main"
							width={800}
							height={600}
						/>
					</Grid>
					<Grid
						item
						container
						spacing={0.6}
						justifyContent="space-between"
						alignItems="center"
						direction="row"
						width="100%"
					>
						{images.map((image, i) => (
							<Grid item key={i} sx={{ cursor: 'pointer' }}>
								<Image
									key={i}
									src={imageBuilder(image, 132, 105)}
									width={132}
									height={105}
									alt="small image"
									onMouseEnter={() => setIndex(i)}
								/>
							</Grid>
						))}
					</Grid>
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
								Buy Now
							</Button>
							<Button
								variant="contained"
								endIcon={<ChevronRightIcon />}
								sx={{
									height: '3.2em',
									justifyContent: 'space-between',
									fontSize: '1em',
									bgcolor: '#444C53',
								}}
							>
								Enquire About This Vehicle
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataViewerSection;
