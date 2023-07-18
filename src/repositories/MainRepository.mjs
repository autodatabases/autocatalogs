import ModelTransmissionRepository from '../repositories/ModelTransmissionRepository.mjs';
import ModificationRepository from '../repositories/ModificationRepository.mjs';
import ManufacturerRepository from '../repositories/ManufacturerRepository.mjs';
import TransmissionRepository from '../repositories/TransmissionRepository.mjs';
import ModelDriveRepository from '../repositories/ModelDriveRepository.mjs';
import ModelBodyRepository from '../repositories/ModelBodyRepository.mjs';
import DriveRepository from '../repositories/DriveRepository.mjs';
import ModelRepository from '../repositories/ModelRepository.mjs';
import BodyRepository from '../repositories/BodyRepository.mjs';

export default class MainRepository {
  constructor({ prisma }) {
    this.prisma = prisma;

    this.modelTransmissionRepository = new ModelTransmissionRepository({ prisma });
    this.manufacturerRepository = new ManufacturerRepository({ prisma });
    this.modificationRepository = new ModificationRepository({ prisma });
    this.transmissionRepository = new TransmissionRepository({ prisma });
    this.modelDriveRepository = new ModelDriveRepository({ prisma });
    this.modelBodyRepository = new ModelBodyRepository({ prisma });
    this.modelRepository = new ModelRepository({ prisma });
    this.driveRepository = new DriveRepository({ prisma });
    this.bodyRepository = new BodyRepository({ prisma });
  }

  async getModificationList() {
    return this.modificationRepository.getAll();
  }

  async updateAll({
    manufacturers,
    models,
    modifications,
    transmissions,
    bodies,
    modelBody,
    modelTransmission,
    drives,
    modelDrive
  }) {
    const upsertBodies = this.bodyRepository.upsert(bodies);
    const upsertTransmission = this.transmissionRepository.upsert(transmissions);
    const upsertDrives = this.driveRepository.upsert(drives);
    const upsertManufacturers = this.manufacturerRepository.upsert(manufacturers);
    const upsertModels = this.modelRepository.upsert(models);
    const upsertModifications = this.modificationRepository.upsert(modifications);
    const upsertModelBodies = this.modelBodyRepository.upsert(modelBody);
    const upsertModelTransmission = this.modelTransmissionRepository.upsert(modelTransmission);
    const upsertModelDrive = this.modelDriveRepository.upsert(modelDrive);

    await this.prisma.$transaction(
      upsertBodies.concat(
        upsertTransmission,
        upsertDrives,
        upsertManufacturers,
        upsertModels,
        upsertModifications,
        upsertModelBodies,
        upsertModelTransmission,
        upsertModelDrive
      )
    );
  }
}
