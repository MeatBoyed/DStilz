import { Fragment, cloneElement, useState } from 'react';
import type { NextPage } from 'next';

import { ElevationScrollProp } from '../../Interfaces';

import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import {
	Link as MUILink,
	MenuItem,
	MenuList,
	Paper,
	Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonGroup from '@mui/material/ButtonGroup';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';

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
										size="large"
										edge="start"
										color="inherit"
										aria-label="menu"
										onClick={() => setMenuIsOpen(!menuIsOpen)}
									>
										<MenuIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<Typography variant="h6" component="div">
										Dstilez Auto
									</Typography>
								</Grid>
								<Grid item>
									<Button color="inherit">Login</Button>
								</Grid>
							</Grid>
						</Toolbar>
					</AppBar>
					{menuIsOpen && <Menu />}
				</Fragment>
			</ElevationScroll>
			<Toolbar />
		</Fragment>
	);
};

export default Navbar;
