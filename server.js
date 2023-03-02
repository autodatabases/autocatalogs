import http from 'http';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { handle } from './core.js';
import GetManufacturersUsecase from './src/usecases/GetManufacturersUsecase.mjs';
import GetModelsUsecase from './src/usecases/GetModelsUsecase.mjs';
import GetModificationsUsecase from './src/usecases/GetModificationsUsecase.mjs';
import GetDrivesUsecase from './src/usecases/GetDrivesUsecase.mjs';
import GetBodiesUsecase from './src/usecases/GetBodiesUsecase.mjs';
import { onError, onNoMatch, queryParams } from './libs/middlewares.mjs';
import GetTransmissionsUsecase from './src/usecases/GetTransmissionsUsecase.mjs';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;
const port = argv?.p || 3000;
const host = argv?.H || '127.0.0.1';

const handler = nc({ onError, onNoMatch, attachParams: true })
	.use(bodyParser.json())
	.use(queryParams)
	.get('/autocatalogs/api/manufacturers', handle(GetManufacturersUsecase))
	.get('/autocatalogs/api/models', handle(GetModelsUsecase))
	.get('/autocatalogs/api/modifications', handle(GetModificationsUsecase))
	.get('/autocatalogs/api/drives', handle(GetDrivesUsecase))
	.get('/autocatalogs/api/bodies', handle(GetBodiesUsecase))
	.get('/autocatalogs/api/transmissions', handle(GetTransmissionsUsecase));

http.createServer(handler).listen(port, host);
