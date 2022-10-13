import ManufacturerMapper from '../../src/mappers/ManufacturerMapper.mjs';
import ModelMapper from '../../src/mappers/ModelMapper.mjs';

// import { createScope } from '../../libs/usecases/index.mjs';

import data from '../data/catalog';

test('check ModelMapper output data', async () => {
	// const scope = await createScope({}, false);

	const makes = data.Catalog.Make;

	const manufacturerMapper = new ManufacturerMapper();
	const modelMapper = new ModelMapper();

	const { modelsFromCatalog } = manufacturerMapper.map(makes);
	const { models } = modelMapper.map(modelsFromCatalog);

	const expected = [
		{
			id: 421756,
			name: '378 GT Zagato',
			code: '378_gt_zagato',
			avitoCode: '378_gt_zagato',
			vehicleManufacturerId: 329192
		},
		{
			id: 329595,
			name: 'Ace',
			code: 'ace',
			avitoCode: 'ace',
			vehicleManufacturerId: 329192
		},
		{
			id: 329596,
			name: 'Aceca',
			code: 'aceca',
			avitoCode: 'aceca',
			vehicleManufacturerId: 329192
		},
		{
			id: 329852,
			name: 'Cobra',
			code: 'cobra',
			avitoCode: 'cobra',
			vehicleManufacturerId: 329192
		},
		{
			id: 331089,
			name: 'ZDX',
			code: 'zdx',
			avitoCode: 'zdx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330645,
			name: 'RDX',
			code: 'rdx',
			avitoCode: 'rdx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330238,
			name: 'Integra',
			code: 'integra',
			avitoCode: 'integra',
			vehicleManufacturerId: 329193
		},
		{
			id: 329917,
			name: 'CSX',
			code: 'csx',
			avitoCode: 'csx',
			vehicleManufacturerId: 329193
		},
		{
			id: 422565,
			name: 'SLX',
			code: 'slx',
			avitoCode: 'slx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330897,
			name: 'TL',
			code: 'tl',
			avitoCode: 'tl',
			vehicleManufacturerId: 329193
		},
		{
			id: 329990,
			name: 'EL',
			code: 'el',
			avitoCode: 'el',
			vehicleManufacturerId: 329193
		},
		{
			id: 421299,
			name: 'ILX',
			code: 'ilx',
			avitoCode: 'ilx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330684,
			name: 'RSX',
			code: 'rsx',
			avitoCode: 'rsx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330927,
			name: 'TSX',
			code: 'tsx',
			avitoCode: 'tsx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330493,
			name: 'NSX',
			code: 'nsx',
			avitoCode: 'nsx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330406,
			name: 'MDX',
			code: 'mdx',
			avitoCode: 'mdx',
			vehicleManufacturerId: 329193
		},
		{
			id: 330665,
			name: 'RL',
			code: 'rl',
			avitoCode: 'rl',
			vehicleManufacturerId: 329193
		},
		{
			id: 330898,
			name: 'TLX',
			code: 'tlx',
			avitoCode: 'tlx',
			vehicleManufacturerId: 329193
		},
		{
			id: 329836,
			name: 'CL',
			code: 'cl',
			avitoCode: 'cl',
			vehicleManufacturerId: 329193
		}
	];

	expect(expected).toEqual(models);
});
