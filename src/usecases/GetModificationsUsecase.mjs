export default class GetModificationsUsecase {
    constructor({ modelRepository, modificationRepository }) {
      this.modelRepository = modelRepository;
      this.modificationRepository = modificationRepository;
    }
    async process({ query, count }) {
        const model = await this.modelRepository.getModels({model: query})
        const modelsId = []
        model.map(({id, ...over}) => modelsId.push(id))

        const rows = await this.modificationRepository.getModification({ modelId: modelsId, count });
        
        return rows.map(({ name, code, vehicleYear, vehicleEnginePower, vehicleEngineCapacity }) =>
         ({ code, name, vehicleYear, vehicleEnginePower, vehicleEngineCapacity }));
    }
  
    async schema() {}
  }