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
		const savedBodies = await this.bodyRepository.saveMany(bodies);
		const savedTransmission = await this.transmissionRepository.saveMany(transmissions);
		const savedDrives = await this.driveRepository.saveMany(drives);
		const savedManufacturers = await this.manufacturerRepository.saveMany(manufacturers);

		// await this.modelRepository.saveMany(models.slice(0, 1000));
		// await this.modelRepository.saveMany(models.slice(1001, 2000));
		// await this.modelRepository.saveMany(models.slice(2001, 3000));
    // console.log(models[0], modifications[0]);
    console.log('count ' + models.length);
    // const model = (models.find(model => model.id === 472580));
    const savedModels = await this.modelRepository.saveMany(models);

    // for (const modification of modifications) {
    //   console.log(modification);
    //   const savedModifications = await this.modificationRepository.saveMany([modification]);
    // }
		// const savedModelBodies = await this.modelBodyRepository.saveMany(modelBody);
		// const savedModelTransmission = await this.modelTransmissionRepository.saveMany(modelTransmission);
		// const savedModelDrive = await this.modelDriveRepository.saveMany(modelDrive);

		// await this.prisma.$transaction([
		// 	savedBodies,
		// 	savedTransmission,
		// 	savedDrives,
		// 	savedManufacturers,
		// 	savedModels,
		// 	savedModifications,
		// 	savedModelBodies,
		// 	savedModelTransmission,
		// 	savedModelDrive
		// ]);
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
