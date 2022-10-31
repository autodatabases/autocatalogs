import Repository from './Repository.mjs';

export default class ModelRepository extends Repository{
  setupTable() {
    this.table = 'vehicleModel';
  }

  /**
   * Метод для пакетного сохранения моделей авто из каталога
   * @param {Array} models модели авто полученные из каталога
   */
  saveMany(models) {
    return this.model.createMany({
      data: models,
      skipDuplicates: true
    });
  }

  deleteMany() {
    return this.model.deleteMany({});
  }

  getModels({ query, manufacturerId, manufacturerName, count }) {
    return this.model.findMany({
      where: {
        ...(query && {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        }),
        ...(manufacturerId && {
          vehicleManufacturerId: manufacturerId
        }),
        ...(manufacturerName && {
          vehicleManufacturer: {
            name: manufacturerName
          }
        }),

      },
      ...(count && { take: parseInt(count) })
    });
  }
}
