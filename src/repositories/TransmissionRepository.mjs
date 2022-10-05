export default class TransmissionRepository {
	constructor({ prisma }) {
		this.prisma = prisma;
	}

	/**
	 * Метод для пакетного сохранения типов трансмиссий авто из каталога
	 * @param {Array} transmissions типы трансмиссий авто полученные из каталога
	 */
	async saveMany(transmissions) {
		await this.prisma.cartransmission.createMany({
			data: transmissions,
			skipDuplicates: true
		});
	}
}
