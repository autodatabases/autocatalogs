export default class ModificationRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	async saveMany(modifications) {
		if (this.prisma) {
			await this.prisma.vehicleModification.createMany({
				data: modifications,
				skipDuplicates: true
			});
		}
	}
}
