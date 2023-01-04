import { NextPage } from 'next';
import { useState, FormEvent } from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { EnquireData, Phone } from '../../../DAS';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { MuiTelInputInfo } from 'mui-tel-input/dist/index.types';

export const EnquireCard: NextPage = () => {
	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [phone, setPhone] = useState<Phone>({
		value: '',
		info: { countryCallingCode: '27', countryCode: 'ZA', nationalNumber: '', numberType: 'MOBILE', numberValue: '', reason: 'input' },
	});
	const [email, setEmail] = useState<string>('');
	const [requireFinance, setRequireFinance] = useState<boolean>(false);
	const [willTrade, setWillTrade] = useState<boolean>(false);
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<boolean>(false);

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Check Phone number
		if (!matchIsValidTel(phone.value)) {
			setIsValidPhoneNumber(true);
			return;
		}

		const enquireData: EnquireData = {
			name: name,
			email: email,
			phone: phone.value,
			isEnquire: true,
			surname: surname,
			willTrade: willTrade,
			requireFinance: requireFinance,
		};

		const response = await fetch('/api/enquire', { method: 'POST', body: JSON.stringify(enquireData) });
		const data = await response.json();
		setIsValidPhoneNumber(false);
		console.log(data);
	};

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
			<Grid container direction="column" justifyContent="center" alignItems="center" width="100%">
				<Grid item sx={{ marginBottom: '1em' }}>
					<Typography variant="h5" sx={{ fontSize: '1.3em', fontWeight: '600' }}>
						Enquire about this vehicle
					</Typography>
				</Grid>
				<form onSubmit={handleSearch}>
					<Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} width="100%">
						<Grid item width="100%">
							<TextField
								id="Name"
								placeholder="Name"
								variant="outlined"
								type="text"
								fullWidth
								value={name}
								onChange={(e) => setName(e.target.value as string)}
								required
								sx={{
									color: 'white',
									'& .MuiInputBase-root': {
										'& p': {
											color: 'white',
										},
										'& fieldset': {
											borderColor: 'white',
										},
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
								required
								value={surname}
								onChange={(e) => setSurname(e.target.value as string)}
								sx={{
									color: 'white',
									'& .MuiInputBase-root': {
										'& p': {
											color: 'white',
										},
										'& fieldset': {
											borderColor: 'white',
										},
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
							<MuiTelInput
								fullWidth
								sx={{
									color: 'white',
									'& .MuiInputBase-root': {
										'& p': {
											color: 'white',
										},
										'& fieldset': {
											borderColor: 'white',
										},
										'& input': {
											textAlign: 'left',
											color: 'white',
											borderColor: 'white',
										},
									},
								}}
								forceCallingCode
								defaultCountry="ZA"
								value={phone.value}
								onlyCountries={['ZA']}
								disableDropdown
								required
								onChange={(newPhoneNumber: string, info: MuiTelInputInfo) => setPhone({ value: newPhoneNumber, info: info })}
								error={isValidPhoneNumber}
								helperText={isValidPhoneNumber === true ? 'Phone Number is not Valid' : null}
							/>
						</Grid>
						<Grid item width="100%">
							<TextField
								id="Email"
								placeholder="Email"
								variant="outlined"
								fullWidth
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value as string)}
								sx={{
									color: 'white',
									'& .MuiInputBase-root': {
										'& p': {
											color: 'white',
										},
										'& fieldset': {
											borderColor: 'white',
										},
										'& input': {
											textAlign: 'left',
											color: 'white',
											borderColor: 'white',
										},
									},
								}}
							/>
						</Grid>
						<Grid item container direction="column" alignItems="center" justifyContent="center" width="100%">
							<Grid item width="100%">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											value={requireFinance}
											onChange={(e) => setRequireFinance(e.target.checked)}
											sx={{ color: '#fce4ec' }}
										/>
									}
									label="Do you require finance?"
								/>
							</Grid>
							<Grid item width="100%">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											value={willTrade}
											onChange={(e) => setWillTrade(e.target.checked)}
											sx={{ color: '#fce4ec' }}
										/>
									}
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
								type="submit"
							>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Paper>
	);
};

export default EnquireCard;
