import http from 'http';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { handle } from './core.js';
import GetManufacturersUsecase from './src/usecases/GetManufacturersUsecase.mjs';
import GetModelsUsecase from './src/usecases/GetModelsUsecase.mjs';
import GetModificationsUsecase from './src/usecases/GetModificationsUsecase.mjs';
import GetDrivesUsecase from './src/usecases/GetDrivesUsecase.mjs';
import GetBodiesUsecase from './src/usecases/GetBodiesUsecase.mjs';
import { onError, onNoMatch, queryParams, xforwardCheck } from './libs/middlewares.mjs';
import GetTransmissionsUsecase from './src/usecases/GetTransmissionsUsecase.mjs';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import HeartbeatUsecases from './src/usecases/HeartbeatUsecases.mjs';
// import
const argv = yargs(hideBin(process.argv)).argv;
const port = argv?.p || process.env.HTTP_PORT || 3000;
const host = argv?.H || '127.0.0.1';

const handler = nc({ onError, onNoMatch, attachParams: true })
	.use(xforwardCheck)
	.use(bodyParser.json())
	.use(queryParams)
	.get('/autocatalogs', (req, res) => {
		res.setHeader('Content-Type', 'text/plain');
		res.writeHead(200);
		res.end('OK');
	})
	.get('/autocatalogs/api/manufacturers', handle(GetManufacturersUsecase))
	.get('/autocatalogs/api/models', handle(GetModelsUsecase))
	.get('/autocatalogs/api/modifications', handle(GetModificationsUsecase))
	.get('/autocatalogs/api/drives', handle(GetDrivesUsecase))
	.get('/autocatalogs/api/bodies', handle(GetBodiesUsecase))
	.get('/autocatalogs/api/transmissions', handle(GetTransmissionsUsecase))
	.get('/autocatalogs/heartbeat', handle(HeartbeatUsecases));

http.createServer(handler).listen(port, host);
