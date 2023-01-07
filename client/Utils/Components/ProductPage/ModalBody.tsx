import { NextPage } from 'next';
import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface props {
	status: string;
	messages: [string, string];
}
export const ModalBody: NextPage<props> = ({ status, messages }) => {
	return (
		<Fragment>
			<Grid item>
				<Typography variant="h5" sx={{ fontSize: '1.3em', fontWeight: '600' }}>
					{status}
				</Typography>
			</Grid>

			<Grid item container direction="column" justifyContent="center" alignItems="center">
				<Grid item>
					<Typography variant="h6" sx={{ fontSize: '1em', fontWeight: '500' }}>
						{messages[0]}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="h6" sx={{ fontSize: '1em', fontWeight: '500' }}>
						{messages[1]}
					</Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default ModalBody;
