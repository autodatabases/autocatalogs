export default class BodyRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения типов кузова авто из каталога
	 * @param {Array} bodies типы кузова авто полученные из каталога
	 */
	async saveMany(bodies) {
		await this.prisma.carbody.createMany({
			data: bodies,
			skipDuplicates: true
		});
	}
}
