export default class ModelTransmissionRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	async saveMany(data) {
		await this.prisma.vehicleModelTransmission.createMany({
			data,
			skipDuplicates: true
		});
	}
}
