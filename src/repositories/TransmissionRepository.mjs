export default class TransmissionRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения типов трансмиссий авто из каталога
	 * @param {Array} transmissions типы трансмиссий авто полученные из каталога
	 */
	async saveMany(transmissions) {
		const savedTransmissions = await this.prisma.vehicleTransmission.createMany({
			data: transmissions,
			skipDuplicates: true
		});

		console.log({ savedTransmissions });
	}

	async deleteMany() {
		const vehicleTransmission = await this.prisma.vehicleTransmission.deleteMany({});
		console.log({ vehicleTransmission });
	}
}
