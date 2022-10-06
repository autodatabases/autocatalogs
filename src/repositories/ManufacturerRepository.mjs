export default class ManufacturerRepository {
	constructor({ prisma, prismaService }) {
		this.prisma = prisma;
		this.prismaService = prismaService;
	}

	/**
	 * Метод для пакетного сохранения производителей авто из каталога
	 * @param {Array} manufacturers производители авто полученные из каталога
	 */
	async saveMany(manufacturers) {
		const table = this.prismaService.manufacturerTable.tableName;

		if (this.prisma) {
			await this.prisma[table].createMany({
				data: manufacturers,
				skipDuplicates: true
			});
		}
	}
}
