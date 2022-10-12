export default class ManufacturerRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения производителей авто из каталога
	 * @param {Array} manufacturers производители авто полученные из каталога
	 */
	async saveMany(manufacturers) {
		const savedManufacturers = await this.prisma.vehicleManufacturer.createMany({
			data: manufacturers,
			skipDuplicates: true
		});

		console.log({ savedManufacturers });
	}

	async deleteMany() {
		const vehicleManufacturer = await this.prisma.vehicleManufacturer.deleteMany({});
		console.log({ vehicleManufacturer });
	}
}
