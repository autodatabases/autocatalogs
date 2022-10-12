import CatalogProvider from '../providers/CatalogProvider.mjs';

import ManufacturerMapper from '../mappers/ManufacturerMapper.mjs';
import ModificationMapper from '../mappers/ModificationMapper.mjs';
import ModelMapper from '../mappers/ModelMapper.mjs';

import MainRepository from '../repositories/MainRepository.mjs';
export default class CatalogService {
	constructor({ prisma = null, url }) {
		this.catalogProvider = new CatalogProvider({ url });
		this.manufacturerMapper = new ManufacturerMapper();
		this.modificationMapper = new ModificationMapper();
		this.modelMapper = new ModelMapper();
		this.mainRepository = new MainRepository({ prisma });
	}

	async loadData() {
		try {
			const data = await this.catalogProvider.getData();
			const makes = data.Catalog.Make;
			const result = this.mappedData(makes);
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

		await this.mainRepository.deleteAll();
		await this.mainRepository.saveAll(result);
	}

	mappedData(data) {
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
