import { NextPage } from 'next';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MessageIcon from '@mui/icons-material/Message';
import QuizIcon from '@mui/icons-material/Quiz';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Menu: NextPage = () => {
	return (
		<Paper
			sx={{
				height: '100vh',
				width: '100%',
				paddingTop: '5em',
				paddingLeft: '3em',
			}}
		>
			<MenuList>
				<MenuItem>
					<Grid
						container
						justifyContent="flex-start"
						alignItems="center"
						width="90%"
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
						width="90%"
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
						width="90%"
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
						width="90%"
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
						width="90%"
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
		</Paper>
	);
};

export default Menu;
