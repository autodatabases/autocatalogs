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

  deleteMany() {
    return this.model.deleteMany();
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
  getList({ count, query, modelName, modelId, withBody = false, withTransmission = false }) {
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
      },
      include: {
        vehicleTransmission: withTransmission,
        vehicleBody: withBody,
      },
      ...(count && { take: parseInt(count) })
    });
  }
}
