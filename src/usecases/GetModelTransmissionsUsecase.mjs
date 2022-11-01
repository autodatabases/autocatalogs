export default class GetModelTransmissionsUsecase {
  /**
   * @param {TransmissionRepository} transmissionRepository
   */
  constructor({ transmissionRepository }) {
    this.transmissionRepository = transmissionRepository
  }

  async process(params) {
    this.transmissionRepository.getList(params)
  }
}