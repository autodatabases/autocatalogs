import http from 'http';
import nc from 'next-connect';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import handle from './handle'

dotenv.config({ path: '.env' });

const handler = nc({ attachParams: true })
  .use(bodyParser.json())
  .get('/api/manufacturers', handle(GetManufacturersUsecase))
  .post('/sessions', async (req, res) => {
    // any
  });

const port = process.env['HTTP_PORT'] || 3000;

http.createServer(handler).listen(port);