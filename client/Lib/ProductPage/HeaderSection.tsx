import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Price } from '../../Utils';
import { HeaderSectionProps } from '../../Utils/Interfaces';

export const HeaderSection: NextPage<HeaderSectionProps> = ({
	title,
	price,
}) => {
	return (
		<Container sx={{ marginBottom: '3em' }}>
			{/* Button hover colour */}
			<Grid
				container
				justifyContent={{ xs: 'center', sm: 'space-between' }}
				alignItems="center"
				rowSpacing={2}
				sx={{
					marginTop: '3em',
					borderBottom: '1px solid grey',
					paddingBottom: '1em',
				}}
			>
				<Grid item>
					<Typography variant="h5" align="center">
						{title}
					</Typography>
				</Grid>
				<Grid item>
					<Stack direction="row" spacing={2}>
						<Price price={price} />
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HeaderSection;
