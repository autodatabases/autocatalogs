import CatalogService from '../../src/services/CatalogService.mjs';
import PrismaService from '../../src/services/PrismaService.mjs';
import data from '../data/catalog';
import received from '../data/formattedData';

describe('CatalogService', () => {
	const prismaService = new PrismaService();
	const manufacturer = {
		tableName: 'carmanufacturer',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	};
	const model = {
		tableName: 'carmodel',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode',
		carmanufacturerid: 'carmanufacturerid'
	};
	const modification = {
		tableName: 'carmodification',
		name: 'name',
		carmodelid: 'carmodelid',
		cartransmissionid: 'cartransmissionid',
		carbodyid: 'carbodyid',
		caryear: 'caryear',
		enginecapacity: 'enginecapacity',
		enginepower: 'enginepower'
	};
	const body = {
		tableName: 'carbody',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	};
	const transmission = {
		tableName: 'cartransmission',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	};
	prismaService.setTables(manufacturer, model, modification, body, transmission);

	it('getData', async () => {
		const makes = data.Catalog.Make;
		const service = new CatalogService({ prismaService });
		const expected = service.getData(makes);
		expect(expected).toStrictEqual(received);
	});
});
