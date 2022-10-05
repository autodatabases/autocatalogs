export default class ModificationRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	async saveMany(modifications) {
		await this.prisma.carmodification.createMany({
			data: modifications,
			skipDuplicates: true
		});
	}
}
