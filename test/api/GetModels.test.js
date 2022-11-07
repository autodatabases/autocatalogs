import { createScope } from '../../core.js';
import GetModelsUsecase from '../../src/usecases/GetModelsUsecase.mjs';

test('Get models (count)', async () => {
	const scope = await createScope();
	const instance = new GetModelsUsecase(scope.cradle);
	const result = await instance.process({
		count: 12
	});

	expect(result).toHaveLength(12);
});

test('Get models (filter by query)', async () => {
	const scope = await createScope();
	const instance = new GetModelsUsecase(scope.cradle);
	const result = await instance.process({
		query: 'cha'
	});

	for (const row of result) {
		expect(row.name).toMatch(/cha/i);
	}
});

test('Get models (filter by manufacturerName)', async () => {
	const scope = await createScope();
	const instance = new GetModelsUsecase(scope.cradle);
	const result = await instance.process({
		manufacturerName: 'Fisker'
	});

	expect(result).toEqual([
		{
			id: 439222,
			name: 'Karma',
			code: 'karma',
			avitoCode: 'karma',
			vehicleManufacturerId: 439226,
			vehicleBodyId: null,
			vehicleTransmissionId: null,
			vehicleDriveId: null,
			vehicleEnginePower: null,
			vehicleEngineCapacity: null
		}
	]);
});

test('Get models (filter by manufacturerId)', async () => {
	const scope = await createScope();
	const instance = new GetModelsUsecase(scope.cradle);
	const result = await instance.process({
		manufacturerId: 329213,
		count: 2
	});
	expect(result).toEqual([
		{
			id: 329422,
			name: '2 CV',
			code: '2_cv',
			avitoCode: '2_cv',
			vehicleManufacturerId: 329213,
			vehicleBodyId: null,
			vehicleTransmissionId: null,
			vehicleDriveId: null,
			vehicleEnginePower: null,
			vehicleEngineCapacity: null
		},
		{
			id: 329699,
			name: 'Berlingo',
			code: 'berlingo',
			avitoCode: 'berlingo',
			vehicleManufacturerId: 329213,
			vehicleBodyId: null,
			vehicleTransmissionId: null,
			vehicleDriveId: null,
			vehicleEnginePower: null,
			vehicleEngineCapacity: null
		}
	]);
});
