import Repository from './Repository.mjs';

export default class DriveRepository extends Repository {
  setupTable() {
    this.table = 'VehicleDrive';
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
      const {id, ...overData} = item
      return this.model.updateMany({
        where: {
          id: id
        },
        data: overData
      })
    })
  }

  deleteMany() {
    return this.model.deleteMany({});
  }

  /**
   * @param {string} query
   * @param {number|string} count
   * @return {*}
   */
  getList({ query, count }) {
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
