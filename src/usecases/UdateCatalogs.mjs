import CatalogService from '../services/CatalogService.mjs';

export default class UpdateCatalogs {
	constructor({ prisma, url }) {
		this.catalogService = new CatalogService({ prisma, url });
	}

	async process() {
		await this.catalogService.saveData();
	}
}
