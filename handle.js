export function handle(usecase) {
    return async (req, res) => {
      try {
        const scope = await createScope(req, res);
        const instance = new usecase(scope.cradle)
        const result = await instance.process({ ...req.query, ...req.body });

        res.setHeader('Content-Type', 'application/json'); // лучше вынести эти 3 строки в отдельную функцию
        res.writeHead(statusCode);
        res.end(JSON.stringify(result));
      } catch (exception) {
        console.log(exception);
        // возвращать что-то
      }
    }
  }