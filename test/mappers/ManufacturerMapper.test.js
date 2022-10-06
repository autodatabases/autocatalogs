import ManufacturerMapper from '../../src/mappers/ManufacturerMapper.mjs';
import PrismaService from '../../src/services/PrismaService.mjs';

// import { createScope } from '../../libs/usecases/index.mjs';

import data from '../data/catalog';

test('check ManufacturerMapper output data', async () => {
	const prismaService = new PrismaService();
	// const scope = await createScope({}, false);
	const makes = data.Catalog.Make;
	prismaService.setManufacturer({
		tableName: 'carmanufacturer',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	});
	const mapper = new ManufacturerMapper({ prismaService });

	const { manufacturers } = mapper.map(makes);

	const expected = [
		{ id: 329192, name: 'AC', code: 'ac', avitocode: 'ac' },
		{ id: 329193, name: 'Acura', code: 'acura', avitocode: 'acura' }
	];
	expect(expected).toEqual(manufacturers);
});
