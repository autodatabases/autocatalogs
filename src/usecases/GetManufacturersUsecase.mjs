export default class GetManufacturersUsecase {
  constructor({ manufacturerRepository }) {
    this.manufacturerRepository = manufacturerRepository;
  }

  async process(params) {
    return this.manufacturerRepository.getManufacturers(params);
  }

}
