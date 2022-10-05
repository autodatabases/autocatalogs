export default class ManufacturerRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения производителей авто из каталога
	 * @param {Array} manufacturers производители авто полученные из каталога
	 */
	async saveMany(manufacturers) {
		await this.prisma.carmanufacturer.createMany({
			data: manufacturers,
			skipDuplicates: true
		});
	}
}
