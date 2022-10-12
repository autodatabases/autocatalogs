import CatalogService from '../../src/services/CatalogService.mjs';
import data from '../data/catalog';
import received from '../data/formattedData';

describe('CatalogService', () => {
	it('getData', async () => {
		const makes = data.Catalog.Make;
		const service = new CatalogService({ prisma: null });
		const expected = service.getData(makes);
		expect(expected).toStrictEqual(received);
	});
});
