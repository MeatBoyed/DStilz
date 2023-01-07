// Next, React & DAS
import Image from 'next/image';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, FormEvent, Fragment } from 'react';
import { EnquireData, getValueStr, isEnquireResponse, isProductPageParam } from '../../../DAS';

// MUI
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { MuiTelInputInfo } from 'mui-tel-input/dist/index.types';

// Utils
import ModalBody from './ModalBody';
import { ModalData } from '../../Interfaces';
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid gray',
	boxShadow: 24,
	p: 4,
};

export const EnquireCard: NextPage = () => {
	const router = useRouter();

	const [enquireData, setEnquireData] = useState<EnquireData>({
		name: '',
		email: '',
		vehicleId: '',
		surname: '',
		phone: '',
		isEnquire: true,
		countryCallingCode: '27',
		requireFinance: false,
		willTrade: false,
	});
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<boolean>(false);
	const [modal, setModal] = useState<ModalData>({ status: '', messages: ['', ''], whatsAppUrl: '', error: true, isOpen: false, isLoading: false });

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const serverError: ModalData = {
			status: 'Oh no!',
			messages: ['An unexpected error occured', 'Please try again'],
			whatsAppUrl: '',
			error: true,
			isOpen: true,
			isLoading: true,
		};
		// Check Phone number
		if (!matchIsValidTel(enquireData.phone)) {
			setIsValidPhoneNumber(true);
			return;
		}

		if (!isProductPageParam(router.query)) {
			setModal(serverError);
		}

		setEnquireData((prev) => ({ ...prev, vehicleId: getValueStr(router.query.id) || '' }));
		setModal((prev) => ({ ...prev, isLoading: true, isOpen: true }));
		const response = await fetch('/api/enquire', {
			method: 'POST',
			body: JSON.stringify(enquireData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const responseData: any = await response.json();

		setModal((prev) => ({ ...prev, isLoading: false, isOpen: true }));
		if (!isEnquireResponse(responseData)) {
			setModal(serverError);
		}

		if (responseData.error.length > 0) {
			setModal({
				status: 'Oh no!',
				messages: [responseData.error, 'Please Try again'],
				whatsAppUrl: '',
				error: true,
				isOpen: true,
				isLoading: false,
			});
		}

		setIsValidPhoneNumber(false);
		setModal({
			status: 'Sucess!',
			messages: ['Your enquiry has been send!', 'We shall contact you shortly.'],
			whatsAppUrl: responseData.whatsappLink,
			error: false,
			isOpen: true,
			isLoading: false,
		});
	};

	return (
		<>
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
									id="name"
									name="name"
									placeholder="Name"
									variant="outlined"
									type="text"
									fullWidth
									value={enquireData.name}
									onChange={(e) =>
										setEnquireData((prev) => ({
											...prev,
											name: e.target.value,
										}))
									}
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
									id="surname"
									name="surname"
									placeholder="Surname"
									variant="outlined"
									type="text"
									fullWidth
									required
									value={enquireData.surname}
									onChange={(e) =>
										setEnquireData((prev) => ({
											...prev,
											surname: e.target.value,
										}))
									}
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
									id="phone"
									name="phone"
									forceCallingCode
									defaultCountry="ZA"
									value={enquireData.phone}
									onlyCountries={['ZA']}
									disableDropdown
									required
									onChange={(newPhoneNumber: string, info: MuiTelInputInfo) =>
										setEnquireData((prev) => ({
											...prev,
											phone: newPhoneNumber,
											countryCallingCode: info.countryCallingCode || '27',
										}))
									}
									error={isValidPhoneNumber}
									helperText={isValidPhoneNumber === true ? 'Phone Number is not Valid' : null}
								/>
							</Grid>
							<Grid item width="100%">
								<TextField
									id="email"
									name="email"
									placeholder="Email"
									variant="outlined"
									fullWidth
									type="email"
									required
									value={enquireData.email}
									onChange={(e) =>
										setEnquireData((prev) => ({
											...prev,
											email: e.target.value,
										}))
									}
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
												value={enquireData.requireFinance}
												onChange={(e) =>
													setEnquireData((prev) => ({
														...prev,
														requireFinance: e.target.checked,
													}))
												}
												sx={{ color: '#fce4ec' }}
											/>
										}
										id="requireFinance"
										name="requireFinance"
										label="Do you require finance?"
									/>
								</Grid>
								<Grid item width="100%">
									<FormControlLabel
										control={
											<Checkbox
												defaultChecked={false}
												value={enquireData.willTrade}
												onChange={(e) =>
													setEnquireData((prev) => ({
														...prev,
														willTrade: e.target.checked,
													}))
												}
												sx={{ color: '#fce4ec' }}
											/>
										}
										id="willTrade"
										name="willTrade"
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
					<Modal
						open={modal.isOpen}
						onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={3} sx={style}>
							{modal.isLoading ? (
								<Typography variant="h5" sx={{ fontSize: '1.3em', fontWeight: '600' }}>
									Loading...
								</Typography>
							) : (
								<Fragment>
									<ModalBody status={modal.status} messages={modal.messages} />
									<Grid item>
										<Button
											variant="contained"
											startIcon={
												modal.error ? (
													<CloseIcon />
												) : (
													<Image
														alt="whatsapp icon"
														width={30}
														height={30}
														objectFit="fill"
														src="/GeneralImages/whatsAppIcon_kqginj.svg"
													/>
												)
											}
											sx={{
												fontSize: '1em',
												justifyContent: 'flex-start',
												backgroundColor: modal.error ? '#f44336' : '#25D366',
											}}
											onClick={() => {
												if (modal.error) {
													setModal((prev) => ({ ...prev, isOpen: false }));
													return;
												}
												router.push(modal.whatsAppUrl);
											}}
										>
											{modal.error ? 'Try again' : 'Message us on WhatsApp'}
										</Button>
									</Grid>
								</Fragment>
							)}
						</Grid>
					</Modal>
				</Grid>
			</Paper>
		</>
	);
};

export default EnquireCard;
