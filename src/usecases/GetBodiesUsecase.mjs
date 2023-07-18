export default class GetBodiesUsecase {
  /**
   * @param {BodyRepository} bodyRepository
   */
  constructor({ bodyRepository }) {
    this.bodyRepository = bodyRepository;
  }

  async process(params) {
    return this.bodyRepository.getList(params);
  }
}
