import { notify } from '@ilb/mailer/src/errormailer.js';
import application from './libs/application.mjs';

export function handle(usecase) {
  return async (req, res) => {
    try {
      const scope = await createScope(req, res);
      const instance = new usecase(scope.cradle);
      const result = await instance.process({ ...req.query, ...req.body });

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(JSON.stringify(result));
    } catch (exception) {
      console.error(exception);
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(550);
      res.end(JSON.stringify({ error: exception.message }));
      notify(exception).catch(console.log);
    }
  };
}

export async function createScope(req, res) {
  return application.createScope(req, res);
}
