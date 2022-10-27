export default class GetBodiesUsecase {
    constructor({ modelRepository, modificationRepository, modelBodyRepository, bodyRepository }) {
      this.modelRepository = modelRepository;
      this.modificationRepository = modificationRepository;
      this.modelBodyRepository = modelBodyRepository;
      this.bodyRepository = bodyRepository;
    }
    async process({ query }) {
        const model = await this.modelRepository.getModels({model: query})
        const modelsId = []
        model.map(({ id, ...over}) => modelsId.push(id))
        
        const bodyId = await this.modelBodyRepository.getBodyId({ modelId: modelsId });
        const bodiesId = []
        bodyId.map(({vehicleBodyId, ...over}) => bodiesId.push(vehicleBodyId))

        const rows = await this.bodyRepository.getBody({ bodyId: bodiesId });
        return rows.map(({ name, code, avitoCode }) =>
         ({ code, name, avitoCode }));
    }
  
    async schema() {}
  }