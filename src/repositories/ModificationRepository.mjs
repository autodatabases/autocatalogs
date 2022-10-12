export default class ModificationRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	async saveMany(modifications) {
		const savedModifications = await this.prisma.vehicleModification.createMany({
			data: modifications,
			skipDuplicates: true
		});

		console.log({ savedModifications });
	}

	async deleteMany() {
		const vehicleModification = await this.prisma.vehicleModification.deleteMany({});
		console.log({ vehicleModification });
	}
}
