import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Footer: React.FC = () => {
	return (
		<Container
			maxWidth={false}
			sx={{ backgroundColor: '#1B2935', height: '4em' }}
		>
			<Typography
				variant="h5"
				align="center"
				sx={{ fontSize: '1em', color: 'white', paddingTop: '1em' }}
			>
				DASAuto @ 2021
			</Typography>
		</Container>
	);
};

export default Footer;
