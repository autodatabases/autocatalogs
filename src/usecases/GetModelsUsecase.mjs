export default class GetModelsUsecase {
  constructor({ modelRepository, manufacturerRepository }) {
    this.modelRepository = modelRepository;
    this.manufacturerRepository = manufacturerRepository;
  }

  async process(params) {
    return this.modelRepository.getModels(params);
  }
}
