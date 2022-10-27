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

	getModification({modelId, count}) {
		return this.prisma.vehicleModification.findMany({
			where: {
				vehicleModelId: {in: modelId}
			},
			take: count,
			select: {
				id: true,
				vehicleYear: true,
				vehicleEnginePower: true,
				vehicleEngineCapacity: true,
				name: true,
				code: true
			}
		})
	}
}
