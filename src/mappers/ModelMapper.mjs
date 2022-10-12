import cyrillicToTranslate from '../../libs/cyrillicToTranslate.mjs';

export default class ModelMapper {
	constructor() {
		this.cyrillicToTranslate = cyrillicToTranslate;
	}

	/**
	 *
	 * @param {Array} modelsFromCatalog
	 * @returns {Object}
	 * models - массив отформатированных моделей для сохранения данных,
	 * modificationsFromCatalog - массив модификаций для передачи в следубщий маппер,
	 *  сделано чтоб не делать повторные обходы по массиву данных
	 */
	map(modelsFromCatalog) {
		const modificationsFromCatalog = [];
		const models = modelsFromCatalog.map((item) => {
			modificationsFromCatalog.push(...item.Generation.flatMap(({ Modification }) => Modification));
			const name = item.name[0];
			// console.log(name, item);
			return {
				id: Number(item.id[0]),
				name,
				code: this.cyrillicToTranslate.transform(name, '_').toLowerCase(),
				avitoCode: this.cyrillicToTranslate.transform(name, '_').toLowerCase(),
				vehicleManufacturerId: item?.carManufacturerId
			};
		});
		return { models, modificationsFromCatalog };
	}
}
