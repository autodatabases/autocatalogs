import nc from 'next-connect';
import { onError, onNoMatch } from 'libs/middlewares.mjs';
import { createScope, processUsecaseApiInstance2 } from 'libs/usecases.mjs';
import GetModelsUsecase from 'src/usecases/GetModelsUsecase.mjs';

const handler = nc({ onError, onNoMatch });
export default handler.get(async (req, res) => {
  const scope = await createScope(req);
  const usecase = new GetModelsUsecase(scope.cradle);
  await processUsecaseApiInstance2({ req, res }, usecase);
});
