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
	
  /**
   * Метод для обновления
   * @param {Array} data 
   */
  upsert(data) {
	return data.map((item) => {
		  return this.model.upsert({
			where: {
				vehicleModelId_vehicleDriveId: item
			},
			update: item,
			create: item
	  })
	})
}

	deleteMany() {
		return this.model.deleteMany({});
	}
}
