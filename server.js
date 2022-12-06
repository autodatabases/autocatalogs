import http from 'http';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { handle } from './core.js';
import GetManufacturersUsecase from './src/usecases/GetManufacturersUsecase.mjs';
import GetModelsUsecase from './src/usecases/GetModelsUsecase.mjs';
import GetModificationsUsecase from './src/usecases/GetModificationsUsecase.mjs';
import GetDrivesUsecase from './src/usecases/GetDrivesUsecase.mjs';
import GetBodiesUsecase from './src/usecases/GetBodiesUsecase.mjs';
import { queryParams } from './libs/middlewares.mjs';
import GetTransmissionsUsecase from './src/usecases/GetTransmissionsUsecase.mjs';

const handler = nc({ attachParams: true })
	.use(bodyParser.json())
	.use(queryParams)
	.get('/autocatalogs/api/manufacturers', handle(GetManufacturersUsecase))
	.get('/autocatalogs/api/models', handle(GetModelsUsecase))
	.get('/autocatalogs/api/modifications', handle(GetModificationsUsecase))
	.get('/autocatalogs/api/drives', handle(GetDrivesUsecase))
	.get('/autocatalogs/api/bodies', handle(GetBodiesUsecase))
	.get('/autocatalogs/api/transmissions', handle(GetTransmissionsUsecase));

const port = process.env['HTTP_PORT'] || 3000;

http.createServer(handler).listen(port);
