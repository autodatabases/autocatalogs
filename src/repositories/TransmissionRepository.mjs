export default class TransmissionRepository {
	constructor({ prisma, prismaService }) {
		this.prisma = prisma;
		this.prismaService = prismaService;
	}

	/**
	 * Метод для пакетного сохранения типов трансмиссий авто из каталога
	 * @param {Array} transmissions типы трансмиссий авто полученные из каталога
	 */
	async saveMany(transmissions) {
		const table = this.prismaService.transmissionTable.tableName;

		if (this.prisma) {
			await this.prisma[table].createMany({
				data: transmissions,
				skipDuplicates: true
			});
		}
	}
}
