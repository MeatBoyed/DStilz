import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Make it Smaller (file size)
import Banner from '../../public/Banner.jpg';

export const BannerSection: NextPage = () => {
	const bannerStyle = {
		backgroundImage: `url(${Banner.src})`,
		height: '80vh',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	return (
		<Grid
			container
			id="BannerSection"
			direction="column"
			alignItems="center"
			justifyContent="center"
			spacing={2}
			sx={bannerStyle}
		>
			<Grid item>
				<Typography
					variant="h6"
					align="center"
					sx={{ color: '#ffff', fontSize: '2em' }}
				>
					Buy Your Car Today, At Cheaper Prices
				</Typography>
			</Grid>
			<Grid item sx={{ marginBottom: '10em' }}>
				<Button
					variant="contained"
					size="large"
					fullWidth={true}
					sx={{
						backgroundColor: '#F33939',
						':hover': { backgroundColor: '#F33939' },
					}}
				>
					Buy Now
				</Button>
			</Grid>
		</Grid>
	);
};

export default BannerSection;
