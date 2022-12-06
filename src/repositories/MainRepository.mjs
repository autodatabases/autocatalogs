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

	async saveAll({
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
    const savedBodies = this.bodyRepository.saveMany(bodies);
    const savedTransmission = this.transmissionRepository.saveMany(transmissions);
    const savedDrives = this.driveRepository.saveMany(drives);
    const savedManufacturers = this.manufacturerRepository.saveMany(manufacturers);
    const savedModels = this.modelRepository.saveMany(models);
    const savedModifications = this.modificationRepository.saveMany(modifications);
    const savedModelBodies = this.modelBodyRepository.saveMany(modelBody);
    const savedModelTransmission = this.modelTransmissionRepository.saveMany(modelTransmission);
    const savedModelDrive = this.modelDriveRepository.saveMany(modelDrive);

    await this.prisma.$transaction([
      savedBodies,
      savedTransmission,
      savedDrives,
      savedManufacturers,
      savedModels,
      savedModifications,
      savedModelBodies,
      savedModelTransmission,
      savedModelDrive
    ]);
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
		let updates = []

		updates.push(this.bodyRepository.updateMany(bodies));
		updates.push(this.transmissionRepository.updateMany(transmissions));
		updates.push(this.driveRepository.updateMany(drives));
		updates.push(this.manufacturerRepository.updateMany(manufacturers));
		updates.push(this.modelRepository.updateMany(models));
		updates.push(this.modificationRepository.updateMany(modifications));
		updates.push(this.modelBodyRepository.updateMany(modelBody));
		updates.push(this.modelTransmissionRepository.updateMany(modelTransmission));
		updates.push(this.modelDriveRepository.updateMany(modelDrive));

		updates.map(async (update) => {
			await this.prisma.$transaction(update)
		})
	}

	async deleteAll() {
		const deletedModels = this.modelRepository.deleteMany();
		const deletedModelBodies = this.modelBodyRepository.deleteMany();
		const deletedModelTransmissions = this.modelTransmissionRepository.deleteMany();
		const deletedModelDrives = this.modelDriveRepository.deleteMany();
		const deletedManufacturers = this.manufacturerRepository.deleteMany();
		const deletedModifications = this.modificationRepository.deleteMany();
		const deletedBodies = this.bodyRepository.deleteMany();
		const deletedTransmissions = this.transmissionRepository.deleteMany();
		const deletedDrives = this.driveRepository.deleteMany();

		await this.prisma.$transaction([
			deletedModelBodies,
			deletedModelTransmissions,
			deletedModelDrives,
			deletedBodies,
			deletedTransmissions,
			deletedDrives,
			deletedModifications,
			deletedModels,
			deletedManufacturers
		]);
	}
}
