import Repository from './Repository.mjs';

export default class ModelDriveRepository extends Repository {
    setupTable() {
      this.table = 'VehicleModelDrive';
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
