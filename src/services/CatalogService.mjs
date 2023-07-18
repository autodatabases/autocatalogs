import ManufacturerMapper from '../mappers/ManufacturerMapper.mjs';
import ModificationMapper from '../mappers/ModificationMapper.mjs';
import ModelMapper from '../mappers/ModelMapper.mjs';

import createDebug from 'debug';
const debug = createDebug('autocatalogs');

export default class CatalogService {
  constructor({ catalogProvider, mainRepository }) {
    this.catalogProvider = catalogProvider;
    this.mainRepository = mainRepository;
    this.manufacturerMapper = new ManufacturerMapper();
    this.modificationMapper = new ModificationMapper();
    this.modelMapper = new ModelMapper();
  }

  /**
   * Метод получает данные и приводит к нужному формату
   * @returns Array
   */
  async loadData() {
    try {
      const data = await this.catalogProvider.getData();
      const makes = data.Catalog.Make;
      const savedModifications = await this.mainRepository.getModificationList();
      const result = this.mappedData(makes, savedModifications);
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * Метод обновляет существующие таблицы и сохраняет новые записи
   */
  async updateData() {
    const result = await this.loadData();
    await this.mainRepository.updateAll(result);
    debug('Таблицы обновлены');
  }

  /**
   * Метод приводит данные к нужному формату
   * Возвращает обьект с массивами параметров
   *
   * @param {Array} data
   * @returns Object
   */
  mappedData(data, savedModifications) {
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
    } = this.modificationMapper.map(modificationsFromCatalog, savedModifications);
    // console.log({ modelBody, modelTransmission, modelDrive });

    debug('Данные загружены', {
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
