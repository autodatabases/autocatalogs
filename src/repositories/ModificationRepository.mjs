export default class ModificationRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	saveMany(modifications) {
		return this.prisma.vehicleModification.createMany({
			data: modifications,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleModification.deleteMany();
	}
}
