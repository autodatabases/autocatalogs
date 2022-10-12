export default class ModelBodyRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	async saveMany(data) {
		await this.prisma.vehicleModelBody.createMany({
			data,
			skipDuplicates: true
		});
	}
}
