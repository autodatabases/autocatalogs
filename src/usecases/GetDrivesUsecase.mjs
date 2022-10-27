export default class GetDrivesUsecase {
    constructor({ modelRepository, modificationRepository, modelDriveRepository, driveRepository }) {
      this.modelRepository = modelRepository;
      this.modificationRepository = modificationRepository;
      this.modelDriveRepository = modelDriveRepository;
      this.driveRepository = driveRepository
    }
    async process({ query }) {
        const model = await this.modelRepository.getModels({model: query})
        const modelsId = []
        model.map(({ id, ...over}) => modelsId.push(id))

        const driveId = await this.modelDriveRepository.getModelDrive({ modelId: modelsId });
        const drivesId = []
        driveId.map(({ vehicleDriveId, ...over }) => drivesId.push(vehicleDriveId))
        
        const rows = await this.driveRepository.getDrive({ driveId: drivesId });
        return rows.map(({ name, code, avitoCode }) =>
         ({ code, name, avitoCode }));
    }
  
    async schema() {}
  }