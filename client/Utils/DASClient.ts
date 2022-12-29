import { DASClient } from '../DAS';

declare global {
	namespace NodeJS {
		interface Global {
			dasClient: DASClient;
		}
	}
}

let DAS: DASClient;

if (typeof window === 'undefined') {
	if (process.env.NODE_ENV === 'production') {
		DAS = new DASClient();
	} else {
		if (!global.dasClient) {
			global.dasClient = new DASClient();
		}

		DAS = global.dasClient;
	}
}

export default DAS;
