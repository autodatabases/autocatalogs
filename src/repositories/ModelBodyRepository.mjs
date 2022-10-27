export default class ModelBodyRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	saveMany(data) {
		return this.prisma.vehicleModelBody.createMany({
			data,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleModelBody.deleteMany({});
	}

	getBodyId({modelId}) {
		return this.prisma.vehicleModelBody.findMany({
			where: {
				vehicleModelId: {in: modelId}
			},
			select: {
				vehicleBodyId: true
			}
		})
	}
}
