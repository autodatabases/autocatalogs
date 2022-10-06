import PrismaService from '../../src/services/PrismaService.mjs';

describe('PrismaService', () => {
	const service = new PrismaService();
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
	service.setTables(manufacturer, model, modification, body, transmission);

	it('get manufacturer fields', async () => {
		const received = {
			avitocode: 'avitocode',
			code: 'code',
			name: 'name',
			tableName: 'carmanufacturer'
		};
		const expected = service.manufacturerTable;
		expect(received).toStrictEqual(expected);
	});
	it('get model fields', async () => {
		const received = {
			tableName: 'carmodel',
			name: 'name',
			code: 'code',
			avitocode: 'avitocode',
			carmanufacturerid: 'carmanufacturerid'
		};
		const expected = service.modelTable;
		expect(received).toStrictEqual(expected);
	});
	it('get modification fields', async () => {
		const received = {
			carbodyid: 'carbodyid',
			carmodelid: 'carmodelid',
			cartransmissionid: 'cartransmissionid',
			caryear: 'caryear',
			enginecapacity: 'enginecapacity',
			enginepower: 'enginepower',
			name: 'name',
			tableName: 'carmodification'
		};
		const expected = service.modificationTable;
		expect(received).toStrictEqual(expected);
	});
	it('get transmission fields', async () => {
		const received = {
			avitocode: 'avitocode',
			code: 'code',
			name: 'name',
			tableName: 'cartransmission'
		};
		const expected = service.transmissionTable;
		expect(received).toStrictEqual(expected);
	});
	it('get body fields', async () => {
		const received = { avitocode: 'avitocode', code: 'code', name: 'name', tableName: 'carbody' };
		const expected = service.bodyTable;
		expect(received).toStrictEqual(expected);
	});
});
