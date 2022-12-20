import { NextPage } from 'next';

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

export const EnquireCard: NextPage = () => {
	return (
		<Paper
			elevation={12}
			sx={{
				backgroundColor: '#1B2935',
				color: 'white',
				padding: '1em',
				width: '100%',
				height: '100%',
			}}
		>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
			>
				<Grid item sx={{ marginBottom: '1em' }}>
					<Typography
						variant="h5"
						sx={{ fontSize: '1.3em', fontWeight: '600' }}
					>
						Enquire about this vehicle
					</Typography>
				</Grid>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={2}
					width="100%"
				>
					<Grid item width="100%">
						<TextField
							id="Name"
							placeholder="Name"
							variant="outlined"
							type="text"
							fullWidth
							sx={{
								color: 'white',
								'& .MuiInputBase-root': {
									'& input': {
										textAlign: 'left',
										color: 'white',
										borderColor: 'white',
									},
								},
							}}
						/>
					</Grid>
					<Grid item width="100%">
						<TextField
							id="Surname"
							placeholder="Surname"
							variant="outlined"
							type="text"
							fullWidth
							sx={{
								color: 'white',
								'& .MuiInputBase-root': {
									'& input': {
										textAlign: 'left',
										color: 'white',
										borderColor: 'white',
									},
								},
							}}
						/>
					</Grid>
					<Grid item width="100%">
						<TextField
							id="PhoneNumber"
							placeholder="Phone Number"
							variant="outlined"
							type="tel"
							fullWidth
							sx={{
								color: 'white',
								'& .MuiInputBase-root': {
									'& input': {
										textAlign: 'left',
										color: 'white',
										borderColor: 'white',
									},
								},
							}}
						/>
					</Grid>
					<Grid item width="100%">
						<TextField
							id="Email"
							placeholder="Email"
							variant="outlined"
							fullWidth
							type="email"
							sx={{
								color: 'white',
								'& .MuiInputBase-root': {
									'& input': {
										textAlign: 'left',
										color: 'white',
										borderColor: 'white',
									},
								},
							}}
						/>
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						width="100%"
					>
						<Grid item width="100%">
							<FormControlLabel
								control={<Checkbox defaultChecked={false} />}
								label="Do you require finance?"
							/>
						</Grid>
						<Grid item width="100%">
							<FormControlLabel
								control={<Checkbox defaultChecked={false} />}
								label="Will you be trading in?"
							/>
						</Grid>
					</Grid>
					<Grid item justifySelf="center">
						<Button
							variant="contained"
							size="large"
							sx={{
								justifyContent: 'space-between',
								bgcolor: '#F47920',
							}}
						>
							Send Message
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default EnquireCard;
