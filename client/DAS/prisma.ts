import { PrismaClient } from '@prisma/client';

// FOR PRODUCTION
declare global {
	namespace NodeJS {
		interface Global {
			prisma: PrismaClient;
		}
	}
}

export let prisma: PrismaClient;

if (typeof window === 'undefined') {
	if (process.env.NODE_ENV === 'production') {
		prisma = new PrismaClient();
	}
	// } else {
	// 	if (!global.prisma) {
	// 		global.prisma = new PrismaClient();
	// 	}

	// 	prisma = global.prisma;
	// }
}

// FOR DEV PURPOSES
// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const prisma =
// 	globalForPrisma.prisma ||
// 	new PrismaClient({
// 		log: ['query'],
// 	});

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
