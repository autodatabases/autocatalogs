import UpdateCatalogs from '../src/usecases/UdateCatalogs.mjs';
import prisma from '../libs/prisma';
const url = process.env['apps.avitocatalogs.ws'];

async function update() {
	const usecase = new UpdateCatalogs({ prisma, url });
	await usecase.process();
}

async function main() {
	try {
		await update();
	} catch (error) {
		// логирование добавить
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
main().then();
