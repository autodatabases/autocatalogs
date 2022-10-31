export default class GetModelsUsecase {
  /**
   * @param {ModelRepository} modelRepository
   */
  constructor({ modelRepository }) {
    this.modelRepository = modelRepository;
  }

  /**
   * @param {{
   *   count: number|string,
   *   manufacturerId: number,
   *   manufacturerName: string,
   *   query: string
   * }} params
   * @return {Promise<[]>}
   */
  async process(params) {
    return this.modelRepository.getList(params);
  }
}
