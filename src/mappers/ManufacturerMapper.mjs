import cyrillicToTranslate from '../../libs/cyrillicToTranslate.mjs';

export default class ManufacturerMapper {
	constructor({ prismaService }) {
		this.cyrillicToTranslate = cyrillicToTranslate;
		this.prismaService = prismaService;
	}
	/**
	 *
	 * @param {Array} data массив данных из каталога
	 * @returns {Object}
	 * manufacturers - массив отформатированных производителей авто для сохранения в бд
	 * modelsFromCatalog - массив моделей из каталога для передачи в маппер моделей
	 */
	map(data) {
		const table = this.prismaService.manufacturerTable;
		const modelsFromCatalog = [];
		const manufacturers = data.map((item) => {
			modelsFromCatalog.push(
				...item.Model.map((model) => ({ carManufacturerId: Number(item.id[0]), ...model }))
			);
			const name = item.name[0];
			return {
				id: Number(item.id[0]),
				[table.name]: name,
				[table.code]: this.cyrillicToTranslate.transform(name, '_').toLowerCase(),
				[table.avitocode]: this.cyrillicToTranslate.transform(name, '_').toLowerCase()
			};
		});
		return { manufacturers, modelsFromCatalog };
	}
}
