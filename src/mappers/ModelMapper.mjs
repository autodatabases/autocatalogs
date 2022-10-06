import cyrillicToTranslate from '../../libs/cyrillicToTranslate.mjs';

export default class ModelMapper {
	constructor({ prismaService }) {
		this.cyrillicToTranslate = cyrillicToTranslate;
		this.prismaService = prismaService;
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
		const table = this.prismaService.modelTable;
		const modificationsFromCatalog = [];
		const models = modelsFromCatalog.map((item) => {
			modificationsFromCatalog.push(...item.Generation.flatMap(({ Modification }) => Modification));
			const name = item.name[0];
			return {
				id: Number(item.id[0]),
				[table.name]: name,
				[table.code]: this.cyrillicToTranslate.transform(name, '_').toLowerCase(),
				[table.avitocode]: this.cyrillicToTranslate.transform(name, '_').toLowerCase(),
				[table.carmanufacturerid]: item.carManufacturerId
			};
		});
		return { models, modificationsFromCatalog };
	}
}
