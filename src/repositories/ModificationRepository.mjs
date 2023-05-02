import Repository from './Repository.mjs';

export default class ModificationRepository extends Repository {
  setupTable() {
    this.table = 'VehicleModification'
  }

  saveMany(modifications) {
    return this.model.createMany({
      data: modifications,
      skipDuplicates: true
    });
  }

  upsert(data) {
    return data.map((item) => {
      return this.model.upsert({
        where: {
          id: item.id
        },
        update: item,
        create: item
      })
    })
  }

  deleteMany() {
    return this.model.deleteMany();
  }

  getAll() {
    return this.model.findMany();
  }

  /**
   * @param {number|string} count
   * @param {string} query
   * @param {string} modelName
   * @param {number} modelId
   * @param withBody
   * @param withTransmission
   * @return {*}
   */
  getList({ count, query, modelName, bodyName, vehicleYear, modelId, withBody = false, withTransmission = false }) {
    return this.model.findMany({
      where: {
        ...(query && {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        }),
        ...(modelId && {
          vehicleModelId: modelId
        }),
        ...(modelName && {
          vehicleModel: {
            name: modelName
          }
        }),
        ...(bodyName && {
          vehicleBody: {
            name: bodyName
          }
        }),
        ...(vehicleYear && {
          vehicleYearFrom: {
            lte: Number(vehicleYear)
          },
          vehicleYearTo: {
            gte: Number(vehicleYear)
          }
        })
      },
      include: {
        vehicleTransmission: withTransmission,
        vehicleBody: withBody,
      },
      ...(count && { take: parseInt(count) })
    });
  }
}
