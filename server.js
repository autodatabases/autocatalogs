import http from 'http';
import nc from 'next-connect';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import handle from './handle.js';
import GetManufacturersUsecase from './src/usecases/GetManufacturersUsecase.mjs'

dotenv.config({ path: '.env' });

const handler = nc({ attachParams: true })
  .use(bodyParser.json())
  .get('/autocatalogs/api/manufacturers', handle(GetManufacturersUsecase))
  .post('/sessions', async (req, res) => {
    // any
  });

const port = process.env['HTTP_PORT'] || 3000;

http.createServer(handler).listen(port);