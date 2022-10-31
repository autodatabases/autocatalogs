export default class GetModificationsUsecase {
  /**
   * @param {ModificationRepository} modificationRepository
   */
  constructor({ modificationRepository }) {
    this.modificationRepository = modificationRepository;
  }

  /**
   * @param {{
   *   count: number|string,
   *   modelId: number,
   *   modelName: string,
   *   query: string
   * }} params
   * @return {Promise<*>}
   */
  async process(params) {
    return this.modificationRepository.getList(params);
  }
}