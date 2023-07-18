import createDebug from 'debug';

import { notify } from '@ilb/mailer/src/errormailer.js';

import Errors from '../src/utils/Errors.mjs';

const debug = createDebug('autocatalogs');
const X_FORWARD_SECRET = process.env['X-FORWARD-SECRET'];
const production = process.env.ILB_SYSID == 'PRODUCTION';

/**
 * Express-like middleware for handling errors.
 * @param err error object
 * @param req request
 * @param res response
 * @param next callback for next middleware
 */
export const onError = (err, req, res, next) => {
  const status = err.status || 550;
  const type = err.type || 'UNHANDLED_ERROR';
  const description = err.description || 'Something went wrong';
  console.error(err);
  notify(err).catch(console.log);
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(status);
  res.end(JSON.stringify({ error: { type: type, description: description } }));
};

/**
 * Express-like middleware for handling wrong HTTP methods.
 * @param req request
 * @param res response
 */
export const onNoMatch = (req, res) => {
  res.writeHead(455);
  res.end();
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

export const xforwardCheck = (req, res, next) => {
  if (
    production &&
    (req.headers['x-forward-secret'] == undefined ||
      req.headers['x-forward-secret'] !== X_FORWARD_SECRET)
  ) {
    debug(
      `X-FORWARD-SECRET rejected: header ${req.headers['x-forward-secret']}, env ${X_FORWARD_SECRET}`
    );
    throw Errors.forbidden('Rejected by x-forward-secret');
  }
  next();
};
