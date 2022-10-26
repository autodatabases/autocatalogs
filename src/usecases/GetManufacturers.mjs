export default class GetManufacturers {
    constructor({ ManufacturerRepository }) {
      this.ManufacturerRepository = ManufacturerRepository;
    }
    async process({ query, count }) {
      const rows = await this.ManufacturerRepository.getManufacturers({ query, count });
  
      return rows.map(({ name, code, avitoCode }) => ({ code, name, avitoCode }));
    }
  
    async schema() {}
  }
  