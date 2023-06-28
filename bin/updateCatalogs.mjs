import UpdateCatalogs from '../src/usecases/UpdateCatalogs.mjs';
import application from '../libs/application.mjs';
import { notify } from '@ilb/errormailer';

async function update() {
  const scope = await application.createScope();
	const usecase = new UpdateCatalogs(scope.cradle);
	await usecase.process();
}

async function main() {
	try {
		console.log('start');
		console.time('end');
		await update();
		console.timeEnd('end');
	} catch (error) {
		// логирование добавить
		console.log(error);
		notify(error).catch(console.log);
	}
}
main().then();
