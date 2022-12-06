import Repository from './Repository.mjs';

export default class ModelBodyRepository extends Repository {
  setupTable() {
    this.table = 'VehicleModelBody';
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

	/**
	 * Метод для обновления
	 * @param {Array} data 
	 */
	updateMany(data) {
		return data.map((item) => {
		  return this.model.updateMany({
			data: item
		  })
		})
	}

	deleteMany() {
		return this.model.deleteMany({});
	}
}
