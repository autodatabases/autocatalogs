export default class ModelRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения моделей авто из каталога
	 * @param {Array} models модели авто полученные из каталога
	 */
	async saveMany(models) {
		if (this.prisma) {
			await this.prisma.vehicleModel.createMany({
				data: models,
				skipDuplicates: true
			});
		}
	}
}