export default class TransmissionRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения типов трансмиссий авто из каталога
	 * @param {Array} transmissions типы трансмиссий авто полученные из каталога
	 */
	async saveMany(transmissions) {
		if (this.prisma) {
			await this.prisma.vehicleTransmission.createMany({
				data: transmissions,
				skipDuplicates: true
			});
		}
	}
}
