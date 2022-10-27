export default class GetModelsUsecase {
    constructor({ modelRepository, manufacturerRepository }) {
      this.modelRepository = modelRepository;
      this.manufacturerRepository = manufacturerRepository;
    }
    async process({ query, manufacturerId, manufacturerName, count }) {
        const manufacturerNameId = manufacturerName ? await this.manufacturerRepository.getManufacturers({ manufacturerName }) : manufacturerName;
        const manufacturerNamesId = []
        if(manufacturerName){
          manufacturerNameId.map(({id, ...over}) => manufacturerNamesId.push(id))
        }

        const rows = await this.modelRepository.getModels({ query: query ? query : '',
         manufacturerId,
         manufacturerNameId: manufacturerName ? manufacturerNamesId : manufacturerName,
         count });

        return rows.map(({ name, code, avitoCode }) => ({ code, name, avitoCode }));
    }
  
    async schema() {}
  }
  