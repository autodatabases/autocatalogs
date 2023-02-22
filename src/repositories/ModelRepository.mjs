import Repository from './Repository.mjs';

export default class ModelRepository extends Repository{
  setupTable() {
    this.table = 'VehicleModel';
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

  /**
   * Метод для обновления моделей авто из каталога
   * @param {Array} data модели авто полученные из каталога
   */
  upsert(data) {
    return data.map((item) => {
      const {id, ...overData} = item
      return this.model.upsert({
        where: {
          id: id
        },
        update: overData,
        create: item
      })
    })
  }

  deleteMany() {
    return this.model.deleteMany({});
  }

  /**
   * @param {string} query
   * @param {number} manufacturerId
   * @param {string} manufacturerName
   * @param {number|string} count
   * @return {*}
   */
  getList({ query, manufacturerId, manufacturerName, count }) {
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
      include: {
        vehicleModification: true
      },
      ...(count && { take: parseInt(count) })
    });
  }
}
