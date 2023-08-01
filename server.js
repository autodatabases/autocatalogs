import http from 'http';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { handle } from './core.js';
import GetManufacturersUsecase from './src/usecases/GetManufacturersUsecase.mjs';
import GetModificationsUsecase from './src/usecases/GetModificationsUsecase.mjs';
import GetTransmissionsUsecase from './src/usecases/GetTransmissionsUsecase.mjs';
import GetModelsUsecase from './src/usecases/GetModelsUsecase.mjs';
import GetDrivesUsecase from './src/usecases/GetDrivesUsecase.mjs';
import GetBodiesUsecase from './src/usecases/GetBodiesUsecase.mjs';
import HeartbeatUsecases from './src/usecases/HeartbeatUsecases.mjs';
import {
  expressPolyfills,
  onError,
  onNoMatch,
  queryParams,
  xforwardCheck
} from './libs/middlewares.mjs';
import Response from './src/responses/Response.mjs';
import HeartbeatResponse from './src/responses/HeartbeatResponse.mjs';
import { rest } from 'msw';
import { createMiddleware } from '@mswjs/http-middleware';

const argv = yargs(hideBin(process.argv)).argv;
const port = argv?.p || process.env.HTTP_PORT || 3000;
const host = argv?.H || '127.0.0.1';

const handler = nc({ onError, onNoMatch, attachParams: true })
  .use(bodyParser.json())
  .use(expressPolyfills)
  .use(
    createMiddleware(
      rest.get('/autocatalogs/api/modifications', (req, res, ctx) => {
        return res(ctx.json({ firstName: 'John' }));
      })
    )
  )
  .use(xforwardCheck)
  .use(queryParams)
  .get('/autocatalogs', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('OK');
  })
  .get('/autocatalogs/api/manufacturers', handle(GetManufacturersUsecase, Response))
  .get('/autocatalogs/api/models', handle(GetModelsUsecase, Response))
  .get('/autocatalogs/api/modifications', handle(GetModificationsUsecase, Response))
  .get('/autocatalogs/api/drives', handle(GetDrivesUsecase, Response))
  .get('/autocatalogs/api/bodies', handle(GetBodiesUsecase, Response))
  .get('/autocatalogs/api/transmissions', handle(GetTransmissionsUsecase, Response))
  .get('/autocatalogs/heartbeat', handle(HeartbeatUsecases, HeartbeatResponse));

http.createServer(handler).listen(port, host);
