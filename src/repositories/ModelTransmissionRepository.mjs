import Repository from './Repository.mjs';

export default class ModelTransmissionRepository extends Repository {
  setupTable() {
    this.table = 'ModelTransmission';
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
				modelId_transmissionId: item
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
