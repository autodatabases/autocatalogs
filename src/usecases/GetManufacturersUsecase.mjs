export default class GetManufacturersUsecase {
    constructor({ manufacturerRepository }) {
      this.manufacturerRepository = manufacturerRepository;
    }
    async process({ query, count }) {
      const rows = await this.manufacturerRepository.getManufacturers({ query: query ? query : '', count });
      return rows.map(({ name, code, avitoCode }) => ({ code, name, avitoCode }));
    }

    async schema() {}
  }
