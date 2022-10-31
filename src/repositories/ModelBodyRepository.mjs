import Repository from './Repository.mjs';

export default class ModelBodyRepository extends Repository {
  setupTable() {
    this.table = 'VehicleBody';
  }

  /**
	 * Метод для пакетного сохранения
	 * @param {Array} data
	 */
	saveMany(data) {
		return this.model.createMany({
			data,
			skipDuplicates: true
		});
	}

	deleteMany() {
		return this.model.deleteMany({});
	}
}
