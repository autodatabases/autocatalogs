export default class ModelRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения моделей авто из каталога
	 * @param {Array} models модели авто полученные из каталога
	 */
	saveMany(models) {
		return this.prisma.vehicleModel.createMany({
			data: models,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleModel.deleteMany({});
	}
}
