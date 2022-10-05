import ManufacturerMapper from '../../src/mappers/ManufacturerMapper.mjs';

// import { createScope } from '../../libs/usecases/index.mjs';

import data from '../data/catalog';

test('check ManufacturerMapper output data', async () => {
	// const scope = await createScope({}, false);
	const makes = data.Catalog.Make;

	const mapper = new ManufacturerMapper();

	const { manufacturers } = mapper.map(makes);

	const expected = [
		{ id: 329192, name: 'AC', code: 'ac', avitocode: 'ac' },
		{ id: 329193, name: 'Acura', code: 'acura', avitocode: 'acura' }
	];
	expect(expected).toEqual(manufacturers);
});
