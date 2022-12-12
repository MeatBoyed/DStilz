import { NextPage } from 'next';

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

export const EnquireSection: NextPage = () => {
	return (
		<Paper
			elevation={12}
			sx={{ backgroundColor: '#1B2935', color: 'white', padding: '1em' }}
		>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
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
				>
					<Grid item>
						<TextField
							id="Name"
							placeholder="Name"
							variant="outlined"
							type="text"
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
					<Grid item>
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
					<Grid item>
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
					<Grid item>
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
					>
						<Grid item>
							<FormControlLabel
								control={<Checkbox defaultChecked={false} />}
								label="Do you require finance?"
							/>
						</Grid>
						<Grid item>
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

export default EnquireSection;
