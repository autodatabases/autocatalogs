import Repository from './Repository.mjs';

export default class TransmissionRepository extends Repository {
  setupTable() {
    this.table = 'VehicleTransmission';
  }

  /**
	 * Метод для пакетного сохранения типов трансмиссий авто из каталога
	 * @param {Array} transmissions типы трансмиссий авто полученные из каталога
	 */
	saveMany(transmissions) {
		return this.model.createMany({
			data: transmissions,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.model.deleteMany({});
	}

  /**
   * @param {string} query
   * @param {number|string} count
   * @param {string} modelName
   * @return {*}
   */
  getList({ query, count, modelName }) {
    return this.model.findMany({
      where: {
        ...(query && {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        }),
        ...(modelName && {

        })
      },
      ...(count && { take: parseInt(count) })
    });
  }
}
