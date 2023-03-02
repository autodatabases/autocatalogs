import { notify } from '@ilb/errormailer';

/**
 * Express-like middleware for handling errors.
 * @param err error object
 * @param req request
 * @param res response
 * @param next callback for next middleware
 */
export const onError = (err, req, res, next) => {
  const status = err.status || 500;
  const type = err.type || 'UNHANDLED_ERROR';
  const description = err.description || 'Something went wrong';
  console.error(err.stack);
  notify(err).catch(console.log);
  res.status(status).json({ error: { type: type, description: description } });
};

/**
 * Express-like middleware for handling wrong HTTP methods.
 * @param req request
 * @param res response
 */
export const onNoMatch = (req, res) => {
  res.status(405).end();
};

export const queryParams = (req, res, next) => {
  const stringParams = req.url.split('?')[1];
  const urlSearchParams = new URLSearchParams(stringParams);
  const params = Object.fromEntries(urlSearchParams.entries());

  req.query = {
    ...req.query,
    ...params
  };

  next();
};