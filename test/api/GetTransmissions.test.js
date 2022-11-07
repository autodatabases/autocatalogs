import { createScope } from '../../core.js';
import GetTransmissionsUsecase from '../../src/usecases/GetTransmissionsUsecase.mjs';

test('Get transmissions', async () => {
	const scope = await createScope();
	const instance = new GetTransmissionsUsecase(scope.cradle);
	const result = await instance.process({});
	expect(result).toEqual([
		{ id: 331254, name: 'механика', code: 'MANUAL', avitoCode: 'MANUAL' },
		{
			id: 331255,
			name: 'автомат',
			code: 'AUTOMATIC',
			avitoCode: 'AUTOMATIC'
		},
		{ id: 331256, name: 'робот', code: 'ROBOTIC', avitoCode: 'ROBOTIC' },
		{
			id: 331257,
			name: 'вариатор',
			code: 'VARIATOR',
			avitoCode: 'VARIATOR'
		}
	]);
});
