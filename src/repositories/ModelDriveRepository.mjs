export default class ModelDriveRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	async saveMany(data) {
		await this.prisma.vehicleModelDrive.createMany({
			data,
			skipDuplicates: true
		});
	}
}
