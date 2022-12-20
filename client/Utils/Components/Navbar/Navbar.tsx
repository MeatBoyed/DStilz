// NEXT & React
import Link from 'next/link';
import type { NextPage } from 'next';
import { Fragment, cloneElement, useState } from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// Utils
import Menu from './Menu';
import { SearchBox } from '../..';
import { ElevationScrollProp } from '../../Interfaces';

const ElevationScroll = (props: ElevationScrollProp) => {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

export const Navbar: NextPage = () => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
	const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);

	const closeHandler = () => {
		setMenuIsOpen(false);
		setSearchIsOpen(false);
	};

	// Open Menu & Ensure Search is Closed
	const openMenuHandler = () => {
		setSearchIsOpen(false);
		setMenuIsOpen(!menuIsOpen);
	};

	// Open Search & Ensure Menu is Closed
	const openSearchHandler = () => {
		setMenuIsOpen(false);
		setSearchIsOpen(!searchIsOpen);
	};

	return (
		<Fragment>
			<CssBaseline />
			<ElevationScroll>
				<Fragment>
					<AppBar color="default">
						<Toolbar>
							<Grid
								container
								direction="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Grid item>
									<IconButton
										edge="start"
										color="inherit"
										aria-label="menu"
										onClick={openMenuHandler}
									>
										<MenuIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<Link href="/">
										<Typography variant="h6" component="div">
											Dstilez Auto
										</Typography>
									</Link>
								</Grid>
								<Grid item>
									<IconButton
										edge="start"
										color="inherit"
										aria-label="searchmenu"
										onClick={openSearchHandler}
									>
										<ManageSearchIcon />
									</IconButton>
								</Grid>
							</Grid>
						</Toolbar>
					</AppBar>

					{menuIsOpen || searchIsOpen ? (
						<Paper
							sx={{
								height: '100vh',
								width: '100%',
								paddingTop: '4em',
								position: 'fixed',
								zIndex: 3,
							}}
						>
							<Grid
								container
								direction="column"
								justifyContent="space-between"
								alignItems="center"
								width="100%"
								height="90%"
							>
								{menuIsOpen && (
									<Grid item width="100%">
										<Menu />
									</Grid>
								)}
								{searchIsOpen && (
									<Grid item width="100%">
										<SearchBox />
									</Grid>
								)}
								<Grid item>
									<Button
										variant="outlined"
										size="small"
										startIcon={<CloseIcon />}
										sx={{
											justifyContent: 'space-between',
											color: 'black',
											borderRadius: '20px',
										}}
										onClick={closeHandler}
									>
										Close
									</Button>
								</Grid>
							</Grid>
						</Paper>
					) : null}
				</Fragment>
			</ElevationScroll>
			<Toolbar />
		</Fragment>
	);
};

export default Navbar;
