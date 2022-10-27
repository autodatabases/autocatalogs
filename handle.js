import { createScope } from './libs/usecases.mjs';

export default function handle(usecase) {
	return async (req, res) => {
		try {
			const scope = await createScope(req, res);
			const instance = new usecase(scope.cradle);
			const result = await instance.process({ ...req.query, ...req.body });

			res.setHeader('Content-Type', 'application/json');
			res.writeHead(200);
			res.end(JSON.stringify(result));
		} catch (exception) {
			console.log(exception);
		}
	};
}
