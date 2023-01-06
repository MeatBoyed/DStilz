import { NextApiRequest, NextApiResponse } from 'next';
import { EnquireData, isEnquireData } from '../../DAS';
import DAS from '../../Utils/DASClient';

// 1 - Notify front-end that Enquiry was send
// 2- Front-end must allow the user to go further on whatsapp with generated link
// 3 - Notify the respective Salesperson that a new enquire has been send

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		if (!isEnquireData(req.body) && req.body.vehicleId == '') {
			res.status(500).json({ message: '', whatsappLink: '', error: 'Data is not correct type', isVaid: true });
		}

		// Create Lead
		const result = await DAS.createLead(req.body);

		// Return 200 with Sucess message & generated whatsapp link
		if (result === '') {
			res.status(500).json({ error: 'An error occured. Please try again', message: '', whatsappLink: '', isValid: true });
		}

		// Send custom messages to the user
		res.status(200).json({
			message: 'Thank you for enquiring on this vehicle. We will get back to you shortly :)',
			whatsappLink: result,
			error: '',
			isValid: true,
		});
	}
}
