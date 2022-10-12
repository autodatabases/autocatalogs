export default class ModificationRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	async saveMany(modifications) {
		await this.prisma.vehicleModification.createMany({
			data: modifications,
			skipDuplicates: true
		});
	}
}
