export default class DriveRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	saveMany(data) {
		return this.prisma.vehicleDrive.createMany({
			data,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.prisma.vehicleDrive.deleteMany({});
	}
}
