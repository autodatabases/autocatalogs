export default class GetModificationsUsecase {
  /**
   * @param {ModificationRepository} modificationRepository
   * @param {ModificationAdapter} modificationAdapter
   */
  constructor({ modificationRepository, modificationAdapter }) {
    this.modificationRepository = modificationRepository;
    this.modificationAdapter = modificationAdapter;
  }

  /**
   * @param {{
   *   count: number|string,
   *   modelId: number,
   *   modelName: string,
   *   bodyName: string,
   *   year: string,
   *   query: string
   * }} params
   * @return {Promise<*>}
   */
  async process(params) {
    const modifications = await this.modificationRepository.getList(params);

    return this.modificationAdapter.mapList(modifications);
  }
}
