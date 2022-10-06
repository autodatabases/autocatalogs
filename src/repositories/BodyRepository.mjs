export default class BodyRepository {
	constructor({ prisma, prismaService }) {
		this.prisma = prisma;
		this.prismaService = prismaService;
	}

	/**
	 * Метод для пакетного сохранения типов кузова авто из каталога
	 * @param {Array} bodies типы кузова авто полученные из каталога
	 */
	async saveMany(bodies) {
		const table = this.prismaService.bodyTable.tableName;
		if (this.prisma) {
			await this.prisma[table].createMany({
				data: bodies,
				skipDuplicates: true
			});
		}
	}
}
