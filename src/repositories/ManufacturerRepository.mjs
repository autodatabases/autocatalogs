import Repository from './Repository.mjs';

export default class ManufacturerRepository extends Repository {
  setupTable() {
    this.table = 'VehicleManufacturer';
  }

  /**
   * Метод для пакетного сохранения производителей авто из каталога
   * @param {Array} manufacturers производители авто полученные из каталога
   */
  saveMany(manufacturers) {
    return this.model.createMany({
      data: manufacturers,
      skipDuplicates: true
    });
  }

  deleteMany() {
    return this.model.deleteMany({});
  }

  async getList({ query, count }) {
    return this.model.findMany({
      where: {
        ...(query && {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        })
      },
      ...(count && { take: parseInt(count) })
    });
  }
}
