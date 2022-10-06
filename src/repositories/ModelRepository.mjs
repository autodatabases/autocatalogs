export default class ModelRepository {
	constructor({ prisma, prismaService }) {
		this.prisma = prisma;
		this.prismaService = prismaService;
	}

	/**
	 * Метод для пакетного сохранения моделей авто из каталога
	 * @param {Array} models модели авто полученные из каталога
	 */
	async saveMany(models) {
		const table = this.prismaService.modelTable.tableName;

		if (this.prisma) {
			await this.prisma[table].createMany({
				data: models,
				skipDuplicates: true
			});
		}
	}
}
