import { DASClient } from '../DAS';

const globalForDAS = global as unknown as { dasClient: DASClient };

const DAS = globalForDAS.dasClient || new DASClient();

if (process.env.NODE_ENV !== 'production') globalForDAS.dasClient = DAS;

export default DAS;
