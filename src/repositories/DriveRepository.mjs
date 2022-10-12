export default class DriveRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	async saveMany(data) {
		await this.prisma.vehicleDrive.createMany({
			data,
			skipDuplicates: true
		});
	}

	async deleteMany() {
		const vehicleDrive = await this.prisma.vehicleDrive.deleteMany({});
		console.log({ vehicleDrive });
	}
}
