import UpdateCatalogs from '../src/usecases/UpdateCatalogs.mjs';
import application from '../libs/application.mjs';
import { notify } from '@ilb/mailer/src/errormailer.js';

async function update() {
  const scope = await application.createScope();
  const usecase = new UpdateCatalogs(scope.cradle);
  await usecase.process();
}

async function main() {
  try {
    await update();
  } catch (error) {
    // логирование добавить
    console.error(error);
    notify(error).catch(console.log);
  }
}
main().then();
