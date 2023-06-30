export default class GetManufacturersUsecase {
  /**
   * @param {ManufacturerRepository} manufacturerRepository
   */
  constructor({ manufacturerRepository }) {
    this.manufacturerRepository = manufacturerRepository;
  }

  /**
   * @param {{
   *   count: number|string,
   *   query: string
   * }} params
   * @return {Promise<*>}
   */
  async process(params) {
    return this.manufacturerRepository.getList(params);
  }
}
