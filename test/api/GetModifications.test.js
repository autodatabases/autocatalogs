import { createScope } from '../../core.js';
import GetModificationsUsecase from '../../src/usecases/GetModificationsUsecase.mjs';

test('Get modifications (count)', async () => {
	// 	const scope = await createScope();
	// 	const instance = new GetModificationsUsecase(scope.cradle);
	// 	const result = await instance.process({
	// 		count: 15
	// 	});
	// 	expect(result).toHaveLength(14);
	// });
	// test('Get modifications (filter by query)', async () => {
	// 	const scope = await createScope();
	// 	const instance = new GetModificationsUsecase(scope.cradle);
	// 	const result = await instance.process({
	// 		query: '2.4 AMT'
	// 	});
	// 	for (const row of result) {
	// 		expect(row.name).toMatch(/2.4 AMT/i);
	// 	}
});

test('Get modifications (filter by modelName)', async () => {
	// const scope = await createScope();
	// const instance = new GetModificationsUsecase(scope.cradle);
	// let result = await instance.process({
	// 	modelName: 'Lodgy',
	// 	count: 1
	// });
	// result = JSON.parse(JSON.stringify(result));
	// expect(result).toEqual([
	// 	{
	// 		id: 338055,
	// 		vehicleModelId: 330344,
	// 		vehicleTransmissionId: 331254,
	// 		vehicleBodyId: 331235,
	// 		vehicleYears: [2012],
	// 		vehicleEnginePower: 115,
	// 		vehicleEngineCapacity: '1.2',
	// 		name: '1.2 MT (115 л.с.)',
	// 		code: 'MANUAL__115__1_2'
	// 	}
	// ]);
});

test('Get modifications (filter by modelId)', async () => {
	// const scope = await createScope();
	// const instance = new GetModificationsUsecase(scope.cradle);
	// let result = await instance.process({
	// 	modelId: 330345,
	// 	count: 2
	// });
	// // console.log(result);
	// result = JSON.parse(JSON.stringify(result));
	// expect(result).toEqual([
	// 	{
	// 		id: 337103,
	// 		vehicleModelId: 330345,
	// 		vehicleTransmissionId: 331256,
	// 		vehicleBodyId: 331238,
	// 		vehicleYears: [2016, 2012],
	// 		vehicleEnginePower: 90,
	// 		vehicleEngineCapacity: '0.9',
	// 		name: '0.9 AMT (90 л.с.)',
	// 		code: 'MANUAL__90__0_9'
	// 	}
	// ]);
});

test('Get modifications (filter by modelId) with body and transmission', async () => {
	// const scope = await createScope();
	// const instance = new GetModificationsUsecase(scope.cradle);
	// let result = await instance.process({
	// 	modelId: 330345,
	// 	count: 2,
	// 	withBody: true,
	// 	withTransmission: true
	// });
	// console.log(result);
	// result = JSON.parse(JSON.stringify(result));
	// expect(result).toEqual([
	// 	{
	// 		id: 337103,
	// 		vehicleModelId: 330345,
	// 		vehicleTransmissionId: 331256,
	// 		vehicleBodyId: 331238,
	// 		vehicleEnginePower: 90,
	// 		vehicleEngineCapacity: '0.9',
	// 		name: '0.9 AMT (90 л.с.)',
	// 		code: 'MANUAL__90__0_9',
	// 		vehicleTransmission: {
	// 			id: 331256,
	// 			name: 'робот',
	// 			code: 'ROBOTIC',
	// 			avitoCode: 'ROBOTIC'
	// 		},
	// 		vehicleBody: {
	// 			id: 331238,
	// 			name: 'универсал',
	// 			code: 'ESTATECAR',
	// 			avitoCode: 'ESTATECAR'
	// 		},
	// 		vehicleYears: [2016, 2012]
	// 	}
	// ]);
});
