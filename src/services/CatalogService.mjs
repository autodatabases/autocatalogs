import CatalogProvider from '../providers/CatalogProvider.mjs';

import ManufacturerMapper from '../mappers/ManufacturerMapper.mjs';
import ModificationMapper from '../mappers/ModificationMapper.mjs';
import ModelMapper from '../mappers/ModelMapper.mjs';

import ModelTransmissionRepository from '../repositories/ModelTransmissionRepository.mjs';
import ModificationRepository from '../repositories/ModificationRepository.mjs';
import ManufacturerRepository from '../repositories/ManufacturerRepository.mjs';
import TransmissionRepository from '../repositories/TransmissionRepository.mjs';
import ModelDriveRepository from '../repositories/ModelDriveRepository.mjs';
import ModelBodyRepository from '../repositories/ModelBodyRepository.mjs';
import DriveRepository from '../repositories/DriveRepository.mjs';
import ModelRepository from '../repositories/ModelRepository.mjs';
import BodyRepository from '../repositories/BodyRepository.mjs';

export default class CatalogService {
	constructor({ prisma = null, url }) {
		this.catalogProvider = new CatalogProvider({ url });
		this.manufacturerMapper = new ManufacturerMapper();
		this.modificationMapper = new ModificationMapper();
		this.modelMapper = new ModelMapper();
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

	async loadData() {
		try {
			const data = await this.catalogProvider.getData();
			const makes = data.Catalog.Make;
			const result = this.getData(makes);
			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	}

	async saveData() {
		const result = await this.loadData();
		if (!result) {
			throw new Error('Данные не загружены');
		}

		const {
			manufacturers,
			models,
			modifications,
			transmissions,
			bodies,
			modelBody,
			modelTransmission,
			drives,
			modelDrive
		} = result;

		await this.manufacturerRepository.deleteMany();
		await this.modelRepository.deleteMany();
		await this.bodyRepository.deleteMany();
		await this.transmissionRepository.deleteMany();
		await this.driveRepository.deleteMany();

		await this.manufacturerRepository.saveMany(manufacturers);
		await this.bodyRepository.saveMany(bodies);
		await this.transmissionRepository.saveMany(transmissions);
		await this.driveRepository.saveMany(drives);
		await this.modelRepository.saveMany(models);
		// await this.modelBodyRepository.saveMany(modelBody);
		// await this.modelTransmissionRepository.saveMany(modelTransmission);
		// await this.modelDriveRepository.saveMany(modelDrive);
		// await this.modificationRepository.saveMany(modifications);
	}

	getData(data) {
		// получаем производителей и модели
		const { manufacturers, modelsFromCatalog } = this.getManufacturers(data);
		// Модели и модификации
		const { models, modificationsFromCatalog } = this.getModels(modelsFromCatalog);
		// Модификации
		const {
			modifications,
			transmissions,
			bodies,
			modelBody,
			modelTransmission,
			drives,
			modelDrive
		} = this.getModificationParams(modificationsFromCatalog);
		// console.log({ modelBody, modelTransmission, drives, modelDrive });

		return {
			manufacturers,
			models,
			modifications,
			transmissions,
			bodies,
			modelBody,
			modelTransmission,
			drives,
			modelDrive
		};
	}

	getManufacturers(data) {
		return this.manufacturerMapper.map(data);
	}

	getModels(modelsFromCatalog) {
		return this.modelMapper.map(modelsFromCatalog);
	}

	getModificationParams(modificationsFromCatalog) {
		return this.modificationMapper.map(modificationsFromCatalog);
	}
}
