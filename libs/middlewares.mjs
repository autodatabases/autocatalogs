import createDebug from 'debug';

import { notify } from '@ilb/mailer/src/errormailer.js';

import xforwardCheck from '../src/utils/xForwardCheck.mjs';

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
  res.end(JSON.stringify({ error: { status, type, description } }));
};

/**
 * Express-like middleware for handling wrong HTTP methods.
 * @param req request
 * @param res response
 */
export const onNoMatch = (req, res) => {
  xforwardCheck(req, res);
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

export const xforwardMiddleware = (req, res, next) => {
  xforwardCheck(req, res);
  next();
};

export const expressPolyfills = (req, res, next) => {
  req.protocol = req.connection.encrypted ? 'https' : 'http';
  req.host = req.headers.host;
  req.get = (header) => req.headers[header.toLowerCase()];
  res.send = (buffer) => {
    res.write(buffer);
    res.end();
  };
  next();
};
