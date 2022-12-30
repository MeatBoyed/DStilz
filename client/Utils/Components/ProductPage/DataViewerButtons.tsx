// Next
import Image from 'next/image';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const DataViewerButtons: NextPage = () => {
	const router = useRouter();
	return (
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
							alt="whatsapp icon"
							width={30}
							height={30}
							objectFit="fill"
							src="/GeneralImages/whatsAppIcon_kqginj.svg"
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
	);
};

export default DataViewerButtons;
