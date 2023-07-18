import UpdateCatalogs from '../src/usecases/UpdateCatalogs.mjs';
import application from '../libs/application.mjs';
import { notify } from '@ilb/mailer/src/errormailer.js';

import createDebug from 'debug';
const debug = createDebug('autocatalogs');

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
    debug('upload_data', error);
    notify(error).catch(console.log);
  }
}
main().then();
