import { createScope } from '../../core.js';
import GetDrivesUsecase from '../../src/usecases/GetDrivesUsecase.mjs';

test('Get drives', async () => {
	const scope = await createScope();
	const instance = new GetDrivesUsecase(scope.cradle);
	const result = await instance.process({});
	expect(result).toEqual([
		{ id: 331252, name: 'задний', code: 'rear', avitoCode: 'rear' },
		{ id: 331251, name: 'передний', code: 'front', avitoCode: 'front' },
		{ id: 331253, name: 'полный', code: 'full', avitoCode: 'full' }
	]);
});
