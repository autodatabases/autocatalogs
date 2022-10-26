export default class ManufacturerRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения производителей авто из каталога
	 * @param {Array} manufacturers производители авто полученные из каталога
	 */
	saveMany(manufacturers) {
		return this.prisma.vehicleManufacturer.createMany({
			data: manufacturers,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleManufacturer.deleteMany({});
	}

	async getManufacturers(query, count) {
		return await this.prisma.vehicleManufacturer.findMany({
			where: {
				name: {
					search: query
				}
			},
			take: count,
			select: {
				name: true,
				code: true,
				avitoCode: true,
			}
		})
	}
}
