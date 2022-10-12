import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const prisma = new PrismaClient({
	// log: [
	//   {
	//     emit: 'event',
	//     level: 'query'
	//   },
	//   {
	//     emit: 'stdout',
	//     level: 'error'
	//   },
	//   {
	//     emit: 'stdout',
	//     level: 'info'
	//   },
	//   {
	//     emit: 'stdout',
	//     level: 'warn'
	//   }
	// ]
});

export default prisma;
