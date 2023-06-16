import Repository from './Repository.mjs';

export default class ManufacturerRepository extends Repository {
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

  /**
   * Метод для обновления производителей авто из каталога
   * @param {Array} data производители авто полученные из каталога
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
