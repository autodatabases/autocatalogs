export default class BodyRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения типов кузова авто из каталога
	 * @param {Array} bodies типы кузова авто полученные из каталога
	 */
	async saveMany(bodies) {
		const savedBodies = await this.prisma.vehicleBody.createMany({
			data: bodies,
			skipDuplicates: true
		});

		console.log({ savedBodies });
	}

	async deleteMany() {
		const vehicleBody = await this.prisma.vehicleBody.deleteMany({});
		console.log({ vehicleBody });
	}
}
