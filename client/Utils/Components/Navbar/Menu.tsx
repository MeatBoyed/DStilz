import { NextPage } from 'next';

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MessageIcon from '@mui/icons-material/Message';
import QuizIcon from '@mui/icons-material/Quiz';
import CarRepairIcon from '@mui/icons-material/CarRepair';

export const Menu: NextPage = () => {
	return (
		<MenuList>
			<MenuItem>
				<Grid
					container
					justifyContent="flex-start"
					alignItems="center"
					width="100%"
					sx={{
						borderBottom: '1px solid #e3e3e8',
					}}
					spacing={2}
				>
					<Grid item color="#0987eb">
						<HomeIcon />
					</Grid>
					<Grid item>
						<Typography
							variant="h5"
							align="center"
							sx={{
								fontSize: `${'16px'}`,
								color: 'black',
								textTransform: 'none',
							}}
						>
							Home
						</Typography>
					</Grid>
				</Grid>
			</MenuItem>
			<MenuItem>
				<Grid
					container
					justifyContent="flex-start"
					alignItems="center"
					width="100%"
					sx={{
						borderBottom: '1px solid #e3e3e8',
					}}
					spacing={2}
				>
					<Grid item color="#0987eb">
						<CarRentalIcon />
					</Grid>
					<Grid item>
						<Typography
							variant="h5"
							align="center"
							sx={{
								fontSize: '16px',
								color: 'black',
								textTransform: 'none',
							}}
						>
							Buy A Car
						</Typography>
					</Grid>
				</Grid>
			</MenuItem>
			<MenuItem>
				<Grid
					container
					justifyContent="flex-start"
					alignItems="center"
					width="100%"
					sx={{
						borderBottom: '1px solid #e3e3e8',
					}}
					spacing={2}
				>
					<Grid item color="#0987eb">
						<CarRepairIcon />
					</Grid>
					<Grid item>
						<Typography
							variant="h5"
							align="center"
							sx={{
								fontSize: '16px',
								color: 'black',
								textTransform: 'none',
							}}
						>
							Sell Your Car
						</Typography>
					</Grid>
				</Grid>
			</MenuItem>
			<MenuItem>
				<Grid
					container
					justifyContent="flex-start"
					alignItems="center"
					width="100%"
					sx={{
						borderBottom: '1px solid #e3e3e8',
					}}
					spacing={2}
				>
					<Grid item color="#0987eb">
						<QuizIcon />
					</Grid>
					<Grid item>
						<Typography
							variant="h5"
							align="center"
							sx={{
								fontSize: '16px',
								color: 'black',
								textTransform: 'none',
							}}
						>
							FAQ
						</Typography>
					</Grid>
				</Grid>
			</MenuItem>

			<MenuItem>
				<Grid
					container
					justifyContent="flex-start"
					alignItems="center"
					width="100%"
					sx={{
						borderBottom: '1px solid #e3e3e8',
					}}
					spacing={2}
				>
					<Grid item color="#0987eb">
						<MessageIcon />
					</Grid>
					<Grid item>
						<Typography
							variant="h5"
							align="center"
							sx={{
								fontSize: '16px',
								color: 'black',
								textTransform: 'none',
							}}
						>
							Contact Us
						</Typography>
					</Grid>
				</Grid>
			</MenuItem>
		</MenuList>
	);
};

export default Menu;
