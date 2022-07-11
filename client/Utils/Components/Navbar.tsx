import { Fragment, cloneElement, useState } from 'react';
import type { NextPage } from 'next';

import { ElevationScrollProp } from '../Interfaces';

import Grid from '@mui/material/Grid';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link as MUILink } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonGroup from '@mui/material/ButtonGroup';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
	const [auth, setAuth] = useState<boolean>(false);

	return (
		<Fragment>
			<CssBaseline />
			<ElevationScroll>
				<AppBar color="default">
					<Toolbar>
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item>
								<Link href="/">
									<MUILink
										variant="h6"
										underline="none"
										sx={{
											fontSize: '1.25rem',
											color: 'black',
											cursor: 'pointer',
										}}
									>
										DSTILEZ
									</MUILink>
								</Link>
							</Grid>
							<Grid item>
								<Link href="/favourites">
									<IconButton aria-label="favorite">
										<FavoriteBorderIcon fontSize={auth ? 'large' : 'medium'} />
									</IconButton>
								</Link>

								{auth ? (
									<IconButton aria-label="account button">
										<AccountCircleIcon fontSize="large" />
									</IconButton>
								) : (
									<ButtonGroup variant="text" color="inherit" size="large">
										<Button style={{ color: 'rgba(244, 121, 32, 1)' }}>
											Sign Up
										</Button>
										<Button>Login</Button>
									</ButtonGroup>
								)}
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</Fragment>
	);
};

export default Navbar;
