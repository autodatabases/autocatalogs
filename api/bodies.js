import nc from 'next-connect';
import { onError, onNoMatch } from 'libs/middlewares.mjs';
import { createScope, processUsecaseApiInstance2 } from 'libs/usecases.mjs';
import GetBodiesUsecase from 'src/usecases/GetBodiesUsecase.mjs';

const handler = nc({ onError, onNoMatch });
export default handler.get(async (req, res) => {
  const scope = await createScope(req);
  const usecase = new GetBodiesUsecase(scope.cradle);
  await processUsecaseApiInstance2({ req, res }, usecase);
});
