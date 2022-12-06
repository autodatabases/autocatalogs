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

	/**
	 * Метод получает данные и приводит к нужному формату
	 * @returns Array
	 */
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

	/**
	 * Метод очищает таблицы и сохраняет полученные каталоги
	 */
	async saveData() {
		const result = await this.loadData();
		await this.mainRepository.deleteAll();
		console.log('Удалены старые таблицы');
		await this.mainRepository.saveAll(result);
		console.log('Сохранены новые таблицы');
	}

	/**
	 * Метод обновляет существующие таблицы и сохраняет новые записи
	 */
	async updateData() {
		const result = await this.loadData();
		await this.mainRepository.updateAll(result);
		console.log('Таблицы обновлены');
		await this.mainRepository.saveAll(result);
		console.log('Сохранены новые записи');
	}

	/**
	 * Метод приводит данные к нужному формату
	 * Возвращает обьект с массивами параметров
	 *
	 * @param {Array} data
	 * @returns Object
	 */
	mappedData(data) {
		// получаем производителей и модели
		const { manufacturers, modelsFromCatalog } = this.manufacturerMapper.map(data);
		// Модели и модификации
		const { models, modificationsFromCatalog } = this.modelMapper.map(modelsFromCatalog);
		// Модификации
		const {
			modifications,
			transmissions,
			bodies,
			modelBody,
			modelTransmission,
			drives,
			modelDrive
		} = this.modificationMapper.map(modificationsFromCatalog);
		// console.log({ modelBody, modelTransmission, modelDrive });

		console.log('Данные загружены', {
			manufacturers: manufacturers.length,
			models: models.length,
			modifications: modifications.length,
			transmissions: transmissions.length,
			bodies: bodies.length,
			drives: drives.length,
			modelBody: modelBody.length,
			modelTransmission: modelTransmission.length,
			modelDrive: modelDrive.length
		});

		return {
			manufacturers,
			models,
			modifications,
			transmissions,
			bodies,
			drives,
			modelBody,
			modelTransmission,
			modelDrive
		};
	}
}
