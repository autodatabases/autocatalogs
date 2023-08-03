import createDebug from 'debug';

import Errors from './Errors.mjs';

const debug = createDebug('autocatalogs');
const X_FORWARD_SECRET = process.env['X-FORWARD-SECRET'];
const production = process.env.ILB_SYSID == 'PRODUCTION';

const xforwardCheck = (req, res) => {
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
};

export default xforwardCheck;
