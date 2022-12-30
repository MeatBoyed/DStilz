import Image from 'next/image';
import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BannerSection: NextPage = () => {
	const bannerStyle = {
		width: '100%',
		height: '80vh',
	};

	return (
		<Grid
			container
			id="BannerSection"
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={bannerStyle}
		>
			<Grid
				item
				sx={{
					width: '100%',
					height: '80vh',
					position: 'relative',
					background: 'black',
				}}
			>
				<Image
					src="/GeneralImages/homepagebanner_g2dg4t.jpg"
					layout="fill"
					objectFit="cover"
					alt="Homepage Banner"
					style={{ opacity: 0.5 }}
					priority
				/>
			</Grid>
			<Grid
				item
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				spacing={2}
				sx={{ position: 'absolute' }}
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
		</Grid>
	);
};

export default BannerSection;
