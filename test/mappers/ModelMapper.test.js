import ManufacturerMapper from '../../src/mappers/ManufacturerMapper.mjs';
import ModelMapper from '../../src/mappers/ModelMapper.mjs';
import PrismaService from '../../src/services/PrismaService.mjs';

// import { createScope } from '../../libs/usecases/index.mjs';

import data from '../data/catalog';

test('check ModelMapper output data', async () => {
	// const scope = await createScope({}, false);
	const prismaService = new PrismaService();
	prismaService.setModel({
		tableName: 'carmodel',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode',
		carmanufacturerid: 'carmanufacturerid'
	});
	prismaService.setManufacturer({
		tableName: 'carmanufacturer',
		name: 'name',
		code: 'code',
		avitocode: 'avitocode'
	});
	const makes = data.Catalog.Make;

	const manufacturerMapper = new ManufacturerMapper({ prismaService });
	const modelMapper = new ModelMapper({ prismaService });

	const { modelsFromCatalog } = manufacturerMapper.map(makes);
	const { models } = modelMapper.map(modelsFromCatalog);

	const expected = [
		{
			id: 421756,
			name: '378 GT Zagato',
			code: '378_gt_zagato',
			avitocode: '378_gt_zagato',
			carmanufacturerid: 329192
		},
		{
			id: 329595,
			name: 'Ace',
			code: 'ace',
			avitocode: 'ace',
			carmanufacturerid: 329192
		},
		{
			id: 329596,
			name: 'Aceca',
			code: 'aceca',
			avitocode: 'aceca',
			carmanufacturerid: 329192
		},
		{
			id: 329852,
			name: 'Cobra',
			code: 'cobra',
			avitocode: 'cobra',
			carmanufacturerid: 329192
		},
		{
			id: 331089,
			name: 'ZDX',
			code: 'zdx',
			avitocode: 'zdx',
			carmanufacturerid: 329193
		},
		{
			id: 330645,
			name: 'RDX',
			code: 'rdx',
			avitocode: 'rdx',
			carmanufacturerid: 329193
		},
		{
			id: 330238,
			name: 'Integra',
			code: 'integra',
			avitocode: 'integra',
			carmanufacturerid: 329193
		},
		{
			id: 329917,
			name: 'CSX',
			code: 'csx',
			avitocode: 'csx',
			carmanufacturerid: 329193
		},
		{
			id: 422565,
			name: 'SLX',
			code: 'slx',
			avitocode: 'slx',
			carmanufacturerid: 329193
		},
		{
			id: 330897,
			name: 'TL',
			code: 'tl',
			avitocode: 'tl',
			carmanufacturerid: 329193
		},
		{
			id: 329990,
			name: 'EL',
			code: 'el',
			avitocode: 'el',
			carmanufacturerid: 329193
		},
		{
			id: 421299,
			name: 'ILX',
			code: 'ilx',
			avitocode: 'ilx',
			carmanufacturerid: 329193
		},
		{
			id: 330684,
			name: 'RSX',
			code: 'rsx',
			avitocode: 'rsx',
			carmanufacturerid: 329193
		},
		{
			id: 330927,
			name: 'TSX',
			code: 'tsx',
			avitocode: 'tsx',
			carmanufacturerid: 329193
		},
		{
			id: 330493,
			name: 'NSX',
			code: 'nsx',
			avitocode: 'nsx',
			carmanufacturerid: 329193
		},
		{
			id: 330406,
			name: 'MDX',
			code: 'mdx',
			avitocode: 'mdx',
			carmanufacturerid: 329193
		},
		{
			id: 330665,
			name: 'RL',
			code: 'rl',
			avitocode: 'rl',
			carmanufacturerid: 329193
		},
		{
			id: 330898,
			name: 'TLX',
			code: 'tlx',
			avitocode: 'tlx',
			carmanufacturerid: 329193
		},
		{
			id: 329836,
			name: 'CL',
			code: 'cl',
			avitocode: 'cl',
			carmanufacturerid: 329193
		}
	];

	expect(expected).toEqual(models);
});
