import React from 'react';
import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const AboutSection: NextPage = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				marginTop: '5em',
				marginBottom: '3em',
				paddingBottom: '3em',
				background: '#E8E9EA',
			}}
		>
			<Container>
				<Grid
					container
					direction="column"
					alignItems="center"
					alignContent="center"
					justifyContent="center"
					spacing={4}
				>
					<Grid item>
						<Typography
							variant="subtitle2"
							align="center"
							sx={{ fontSize: '2em' }}
						>
							Welcome To
						</Typography>
						<Typography variant="h5" align="center" sx={{ fontSize: '4em' }}>
							DASAuto
						</Typography>
					</Grid>
					<Grid item>
						<Typography align="center">
							Aenean ac volutpat purus, eu consectetur metus. Pellentesque
							habitant morbi tristique senectus et netus et malesuada fames ac
							turpis egestas. Curabitur hendrerit cursus nulla sit amet
							dignissim. Cras ante enim, fermentum id hendrerit sed, volutpat id
							ex. Integer sed lacinia nisl, id finibus velit. Sed et ultricies
							odio. In convallis neque sit amet egestas efficitur. Cras ligula
							est, mollis sit amet aliquet sit amet, aliquam in magna.
						</Typography>
					</Grid>
					<Grid item>
						<Typography align="center">
							Aenean ac volutpat purus, eu consectetur metus. Pellentesque
							habitant morbi tristique senectus et netus et malesuada fames ac
							turpis egestas. Curabitur hendrerit cursus nulla sit amet
							dignissim. Cras ante enim, fermentum id hendrerit sed, volutpat id
							ex. Integer sed lacinia nisl, id finibus velit. Sed et ultricies
							odio. In convallis neque sit amet egestas efficitur. Cras ligula
							est, mollis sit amet aliquet sit amet, aliquam in magna.
						</Typography>
					</Grid>
					<Grid item>
						<Typography align="center">
							Aenean ac volutpat purus, eu consectetur metus. Pellentesque
							habitant morbi tristique senectus et netus et malesuada fames ac
							turpis egestas. Curabitur hendrerit cursus nulla sit amet
							dignissim. Cras ante enim, fermentum id hendrerit sed, volutpat id
							ex. Integer sed lacinia nisl, id finibus velit. Sed et ultricies
							odio. In convallis neque sit amet egestas efficitur. Cras ligula
							est, mollis sit amet aliquet sit amet, aliquam in magna.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

export default AboutSection;
