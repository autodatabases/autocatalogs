export default class ModelDriveRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	saveMany(data) {
		return this.prisma.vehicleModelDrive.createMany({
			data,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleModelDrive.deleteMany({});
	}

	getModelDrive({modelId}) {
		return this.prisma.vehicleModelDrive.findMany({
			where: {
				vehicleModelId: {in: modelId}
			},
			select: {
				vehicleDriveId: true
			}
		})
	}
}
